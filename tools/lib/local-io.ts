import fs = require('fs');

import { DownloadItem, genFullname } from './download_list';

import { logger_normal as logger } from './util';

function writeFile(absPath: string, content: string): Promise<void> {
    return new Promise(function (fulfill, reject) {
        fs.writeFile(absPath, content, function (err) {
            if (err) {
                logger.w(``)
                reject(err);
            }
            else
                fulfill();
        });
    });
}

export function saveTemp(item: DownloadItem, content: string) {
    const path = `${__dirname}/../temp/${genFullname(item)}`;
    return writeFile(path, content);
}

export function saveTransformed(item: DownloadItem, content: string) {
    const path = `${__dirname}/../../${genFullname(item)}`;
    return writeFile(path, content);
}