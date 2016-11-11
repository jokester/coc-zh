/**
 * fetch content from trow posts
 * TODO
 */
const cookie: Object = null

import { http } from './lib/net'
import { logger_normal as logger } from './lib/util';
import { articles } from './lib/articles'
import { tidyHTML, selectPart, decodeHtmlEntity, fixMultiSpanTag, removeExtraTag } from './lib/html';
import { getPostContent, bb2Markdown } from './lib/trow_bbcode';
import { download_list, } from './lib/download_list';
import { to_markdown } from './lib/to_markdown';
import { saveTemp } from './lib/local-io';

function main() {
    download_list.forEach((item, itemNo) => {
        const itemDesc = `item#${itemNo}: ${item.title} / ${item.title_zh}`;

        const parts = item.source.map((src) => http.get(src.url).then(selectPart(src.selector)));

        Promise.all(parts).then((parts_html) => parts_html.join("\n"))
            .then(decodeHtmlEntity)
            .then((html) => {
                saveTemp(item, html);
            })
            .then(logger.i.bind(null, `saved ${itemDesc}`))
            .catch(logger.e);
    })
}

main();
