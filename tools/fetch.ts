/**
 * fetch content (html) from trow posts
 */
const cookie: Object = null

import { http } from './lib/net'
import { logger_normal as logger } from './lib/util';
import { getPostContent, bb2Markdown } from './lib/trow_bbcode';
import { download_list } from './lib/download_list';
import { downloadItem } from './lib/download';

/**
 * 下载文件 (已有时不会再次下载)
 */
export function downloadItem(item: DownloadItem): Promise<void> {
    const saveDest = rawPathFor(item);

    if (fs.existsSync(saveDest)) {
        return Promise.reject(`${saveDest} exists. not downloading`);
    }

    const parts = item.source.map((src) => {
        const content = http.get(src.url)
            .then(html => Promise.all(src.selector.map(s => selectPart(s)(html))))
            .then(selectedParts => selectedParts.join("\n\n\n"));
        return content;
    });

    return Promise.all(parts).then((parts_html) => parts_html.join("\n"))
        .then(decodeHtmlEntity)
        .then((html) => {
            saveRaw(item, html);
        });
}

function main() {
    download_list.forEach((item, itemNo) => {
        const itemDesc = `item#${itemNo}: ${item.title} / ${item.title_zh}`;

        downloadItem(item)
            .then( () => logger.i(`saved ${itemDesc}`) )
            .catch(logger.w);
    })
}

main();
