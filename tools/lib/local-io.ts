import fs = require('fs');

import { DownloadItem } from './download';

import { logger_normal as logger } from './util';

function writeFile(absPath: string, content: string): Promise<void> {
    return new Promise(function (fulfill, reject) {
        fs.writeFile(absPath, content, function (err) {
            if (err) {
                logger.w(`error writing ${absPath}`);
                reject(err);
            }
            else
                fulfill();
        });
    });
}

export function readFile(filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', function (err, html) {
            if (err)
                reject(err);
            else
                resolve(html);
        })
    });
}


/**
 * Item的保存文件名
 */
export function genFilename(item: DownloadItem) {
    return item.id || item.title.split(/[^0-9a-zA-Z]+/).join('-');
}

/**
 * Item的保存路径 (包括prefix)
 */
export function genFullname(item: DownloadItem) {
    return `${item.prefix || 'HPL'}/${genFilename(item)}`;
}

/**
 */
export function rawPathFor(item: DownloadItem) {
    return `${__dirname}/../raw/${genFullname(item)}.html`;
}

export function saveRaw(item: DownloadItem, content: string) {
    const path = rawPathFor(item);
    return writeFile(path, content);
}

export function saveConverted(item: DownloadItem, content: string) {
    const path = `${__dirname}/../../content/${genFullname(item)}.md`;
    return writeFile(path, content);
}

export function saveSummary(content: string) {
    return writeFile(`${__dirname}/../../content/SUMMARY.md`, content);
}
