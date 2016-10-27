/// <reference path="libtidy.d.ts" />
// import 'libtidy' = require('libtidy');

import * as libtidy from 'libtidy';

/**
 */
export default function tidyHTML(html: string, log?: (line: string) => void): Promise<Buffer> {

    const tidyOption = { "show-body-only": true };
    return new Promise<Buffer>((resolve, reject) => {
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

                resolve(res.output);
            }
        });

    });
}
