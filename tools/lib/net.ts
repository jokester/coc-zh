import * as request from 'request';

import { logger_normal as logger, logger_silent as NOTUSED, limit } from './util';

// cookie str for "trow.cc" domain as in browser
let cookie_str = "";

const UserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0 WebRTC Demo-rev-proxy';

const referer = "http://trow.cc/board/showforum=82";

const cookieJar = (function () {
    const jar = request.jar();
    const site = 'http://trow.cc';
    (cookie_str || '').split(';').map(function (c) {
        const cookie = request.cookie(c);
        jar.setCookie(c as any, site);
    });
    return jar;
})();

let reqCount = 0;

const requestLimited = {
    get: limit(request.get, 3e3, 10e3),
    post: limit(request.post, 3e3, 10e3)
};

export const http = {
    get: function (url: string, verbose?: boolean) {
        const reqNo = ++reqCount;
        return new Promise<string>((fulfill, reject) => {
            logger.i(`REQ ${reqNo}: GET ${url}`);
            requestLimited.get({
                url: url,
                jar: cookieJar,
                headers: {
                    'User-Agent': UserAgent,
                    'Referer': referer,
                }
            }, function (error, response, body) {
                logger.i(`RES ${reqNo} -> body size=${(body || "").length}`);
                logger.v(`RES ${reqNo} body: ${body}`);
                if (error) {
                    reject(error);
                } else {
                    fulfill(body);
                }
            });
        });
    },

    postForm: function (url: string, formContent: Object, verbose?: boolean) {
        if (2 > 1) throw "deprecated";
        const reqNo = ++reqCount;

        return new Promise((fulfill, reject) => {
            logger.i(`REQ ${reqNo}: POST ${url}`);
            logger.i(`REQ ${reqNo}: POST form = ${JSON.stringify(formContent)}`);

            requestLimited.post({
                url: url,
                jar: cookieJar,
                form: formContent,
                headers: {
                    'User-Agent': UserAgent,
                    'Referer': referer,
                }
            }, function (error, response, body) {
                logger.i(`RES ${reqNo} -> body size=${(body || "").length}`);
                logger.v(`RES ${reqNo} body: ${body}`);

                if (error) {
                    reject(error);
                } else {
                    fulfill(body);
                }
            })
        })
    }
};
