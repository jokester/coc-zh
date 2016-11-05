/// <reference path="libtidy.d.ts" />

import * as libtidy from 'libtidy';
import * as cheerio from 'cheerio';

/**
 */
export function tidyHTML(html: string, log?: (line: string) => void): Promise<string> {

    const tidyOption = { "show-body-only": true };
    return new Promise<string>((resolve, reject) => {
        const b = new libtidy.TidyDoc();
        libtidy.tidyBuffer(html, tidyOption, (err, res) => {
            if (err) {
                reject(err);
            } else {
                if (log) {
                    (res.errlog || "").split(/\n/).forEach(function (line: string) {
                        line && log(line);
                    });
                }

                resolve(res.output.toString());
            }
        });

    });
}

// curried
export function selectPart(selector?: string): (html: string) => string {

    return function (html: string) {
        const context = cheerio.load(html);

        if (!selector)
            return context.html();

        const part = context(selector).html();

        if (part === null) {
            throw `selector=${selector} not found`;
        }

        return part;
    }
}

export function removeHTMLEntities(str: string): string {

    const step1 = str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
        var num = parseInt(numStr, 10); // read num as normal number
        return String.fromCharCode(num);
    });

    const step2 = step1.replace(/&#x([0-9a-zA-Z]{1,4});/gi, function (match, numStr) {
        var num = parseInt(numStr, 16); // read num as normal number
        return String.fromCodePoint(num);
    });

    return step2;
}

export function decodeHtmlEntity(str: string) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec);
    });
};
