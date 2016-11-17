import fs = require('fs');

import { DownloadItem, genFullname } from './download';

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

export function saveRaw(item: DownloadItem, content: string) {
    const path = `${__dirname}/../raw/${genFullname(item)}.html`;
    return writeFile(path, content);
}

export function saveConverted(item: DownloadItem, content: string) {
    const path = `${__dirname}/../../content/${genFullname(item)}.md`;
    return writeFile(path, content);
}

export function saveSummary(content: string) {
    return writeFile(`${__dirname}/../../content/SUMMARY.md`, content);
}
