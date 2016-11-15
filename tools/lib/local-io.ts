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

export function saveRaw(item: DownloadItem, content: string) {
    const path = `${__dirname}/../raw/${genFullname(item)}.html`;
    return writeFile(path, content);
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

export function saveTransformed(item: DownloadItem, content: string) {
    const path = `${__dirname}/../../${genFullname(item)}.md`;
    return writeFile(path, content);
}

export function writeSummary(content: string) {
    return writeFile(`${__dirname}/../../SUMMARY.md`, content);
}