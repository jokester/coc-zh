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

export function decodeHtmlEntity(str: string): string {

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

/**
 * recover <i><b> after <br>
 */
export function fixMultiSpanTag(html: string) {
    let isItalic = false;
    let isBold = false;

    return html.replace(/<([^>]+)>/ig, function (match: null, insideTag: string) {

        const origTag = match;


        if (insideTag.match(/^i$/i)) {
            isItalic = true;
            return origTag;
        }

        if (insideTag.match(/^\/i$/i)) {
            isItalic = false;
            return origTag;
        }

        if (insideTag.match(/^b$/i)) {
            isBold = true;
            return origTag;
        }

        if (insideTag.match(/^\/b$/i)) {
            isBold = false;
            return origTag;
        }

        if (insideTag.match(/^br *\/?$/i)) {
            const tags = ['<br>'];
            if (isBold) {
                tags.unshift('</b>');
                tags.push('<b>');
            }

            if (isItalic) {
                tags.unshift('</i>');
                tags.push('<i>');
            }

            return tags.join('');
        }

        return origTag;
    });
}

export function removeExtraTag(html: string) {

    return html.replace(/<([^>]+)>/ig, function (match: null, insideTag: string) {

        const origTag = match;

        // change <div> </div> to <br>
        if (insideTag.match(/^\/?div/i)) {
            return `<!-- ${insideTag} --> <br>`;
        }

        // remove <span>
        if (insideTag.match(/^span/i)) {
            return '';
        }

        return origTag;
    });
}
