/**
 * fetch content from trow posts
 * TODO
 */
const cookie: Object = null

import { http } from './lib/net'
import { logger_normal as logger } from './lib/util';
import { articles } from './lib/articles'
import { getPostContent, bb2Markdown } from './lib/trow_bbcode';
import { download_list, downloadItem } from './lib/download_list';
import { to_markdown } from './lib/to_markdown';

function main() {
    download_list.forEach((item, itemNo) => {
        const itemDesc = `item#${itemNo}: ${item.title} / ${item.title_zh}`;

        downloadItem(item)
            .then(logger.i.bind(null, `saved ${itemDesc}`))
            .catch(logger.w);
    })
}

main();
