/**
 * fetch bbcode from trow posts
 * TODO
 */
const cookie: Object = null

import { http } from './lib/net'
import { logger_normal as logger } from './lib/util';
import { articles } from './lib/articles'
import { getPostContent, bb2Markdown } from './lib/trow_bbcode';
import { download_list, genFullname } from './lib/download_list';
import fs = require('fs');

function saveFile(path: string, content: string): Promise<void> {
    return new Promise(function (fulfill, reject) {
        fs.writeFile(path, content, function (err) {
            if (err)
                reject(err);
            else
                fulfill();
        });
    });
}

function main() {
    download_list.forEach((item, itemNo) => {
        const itemDesc = `item#${itemNo}: ${item.title} / ${item.title_zh}`;
        http.get(item.url)
            .then(getPostContent)
            .then(bb2Markdown)
            .then((md: string) => {
                return saveFile(`${__dirname}/../${genFullname(item)}.md`, md);
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