/**
 * fetch content from trow posts
 * TODO
 */
const cookie: Object = null

import { http } from './lib/net';
import { logger_normal as logger } from './lib/util';
import { articles } from './lib/articles';
import { writeSummary } from './lib/local-io';
import { convertItem, genFullname } from './lib/download';
import { download_list, download_list_HPL } from './lib/download_list';

function main() {





    download_list.forEach((item, itemNo) => {
        const itemDesc = `item#${itemNo}: ${item.title} / ${item.title_zh}`;

        convertItem(item)
            .then(() => {
                logger.i(`INFO: converted ${itemDesc}`);
            })
            .catch((e) => {
                logger.e(`error downloading ${itemDesc}`)
                logger.e(e);
            })
    });
}

function summary() {
    const summary_lines_prefix = [
        '* [封面](README.md)',
        '---------',

        '* [目录](SUMMARY.md)',
        '---------',
    ];

    const summary_lines_hpl = [
        '#### H.P.Lovecraft',
    ].concat(download_list_HPL.map((item) => {
        return `[${item.title} / ${item.title_zh}](${genFullname(item)}.md)`;
    }));

    const summary = summary_lines_prefix.concat(summary_lines_hpl).join("\n\n");

    writeSummary(summary)
        .then(() => {
            logger.i(`INFO: SUMMARY.md generated`);
        })
        .catch((e) => {
            logger.e(`error generating SUMMARY.md`)
            logger.e(e);
        })
}

main();
summary();