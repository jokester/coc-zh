/**
 * fetch content from trow posts
 * TODO
 */
const cookie: Object = null

import { http } from './lib/net'
import { logger_normal as logger } from './lib/util';
import { articles } from './lib/articles'
import { tidyHTML, selectPart, decodeHtmlEntity, fixMultiSpanTag, removeExtraTag } from './lib/html_tidy';
import { getPostContent, bb2Markdown } from './lib/trow_bbcode';
import { download_list, genFullname } from './lib/download_list';
import { to_markdown } from './lib/to_markdown';
import { saveTemp } from './lib/local-io';

function main() {
    download_list.forEach((item, itemNo) => {
        const itemDesc = `item#${itemNo}: ${item.title} / ${item.title_zh}`;
        http.get(item.url)
            .then(selectPart(item.selector))
            .then(decodeHtmlEntity)
            .then(fixMultiSpanTag)
            .then(removeExtraTag)
            .then((html: string) => {
                saveTemp(item, html);
                return to_markdown(html);
            })
            // .then(to_markdown)
            .then((md: string) => {
                return writeFile(`${__dirname}/../${genFullname(item)}.md`, md);
            })
            .then(() => {
                logger.i(`INFO: downloaded ${itemDesc}`);
            })
            .catch((e) => {
                logger.w(`error downloading ${itemDesc}`)
                logger.w(e);
            })
    })
}

main();