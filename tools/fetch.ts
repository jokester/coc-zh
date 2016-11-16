/**
 * fetch content from trow posts
 * TODO
 */
const cookie: Object = null

import { http } from './lib/net'
import { logger_normal as logger } from './lib/util';
import { getPostContent, bb2Markdown } from './lib/trow_bbcode';
import { download_list } from './lib/download_list';
import { downloadItem } from './lib/download';

function main() {
    download_list.forEach((item, itemNo) => {
        const itemDesc = `item#${itemNo}: ${item.title} / ${item.title_zh}`;

        downloadItem(item)
            .then( () => logger.i(`saved ${itemDesc}`) )
            .catch(logger.w);
    })
}

main();
