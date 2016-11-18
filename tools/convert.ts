/**
 * fetch content from trow posts
 */
import { http } from './lib/net';
import { logger_normal as logger } from './lib/util';
import { DownloadItem } from './lib/download';
import { saveSummary, saveConverted, genFullname, rawPathFor, readFile } from './lib/local-io';
import { download_list, download_list_HPL } from './lib/download_list';
import { tidyHTML, selectPart, decodeHtmlEntity, fixMultiSpanTag, removeExtraTag } from './lib/html';

import { to_markdown } from './lib/markdown';
import { filter_md } from './lib/filters';

/**
 * 将html转换为md
 */
export function convertItem(item: DownloadItem): Promise<void> {
    const rawPath = rawPathFor(item);

    return readFile(rawPath)
        .then(to_markdown)
        .then(filter_md)
        .then((md) => saveConverted(item, md));
}

/**
 * 转换文章本体
 */
function main() {

    download_list.forEach((item, itemNo) => {
        const itemDesc = `item#${itemNo}: ${item.title} / ${item.title_zh}`;

        convertItem(item)
            .then(() => {
                logger.i(`converted ${itemDesc}`);
            })
            .catch((e) => {
                logger.e(`error converting ${itemDesc}`)
                logger.e(e);
            })
    });
}

/**
 * 生成summary
 */
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
        return `* [${item.title} / ${item.title_zh}](${genFullname(item)}.md)`;
    }));

    const summary = summary_lines_prefix.concat(summary_lines_hpl).join("\n\n");

    saveSummary(summary)
        .then(() => logger.i(`SUMMARY.md generated`))
        .catch((e) => {
            logger.e(`error generating SUMMARY.md`)
            logger.e(e);
        })
}

main();
summary();
