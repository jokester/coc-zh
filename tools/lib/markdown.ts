const toMarkdown = require('to-markdown') as (html: string, options?: any) => string;

import {
    tidyHTML, selectPart, decodeHtmlEntity,
    fixMultiSpanTag, removeExtraTag, appendBRafterEditSpan
} from './html';

const convertB = {
    filter: ['br'],
    replacement: function (innerHTML: string, node: null) {
        return "\n\n\n";
    }
};

export function to_markdown(html: string): Promise<string> {

    return Promise.resolve(html)
        .then(fixMultiSpanTag)
        .then(appendBRafterEditSpan)
        .then(removeExtraTag)
        .then(htm => toMarkdown(htm, { converters: [convertB] }));
}
