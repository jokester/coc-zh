const toMarkdown = require('to-markdown') as any;

const convertB = {
    filter: ['br'],
    replacement: function (innerHTML: string, node: null) {
        return "\n\n\n";
    }
};

export function to_markdown(html: string): string {
    return toMarkdown(html, {
        converters: [convertB]
    });
}
