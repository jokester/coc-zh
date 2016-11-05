const toMarkdown = require('to-markdown') as any;

export function to_markdown(html: string): string {
    return toMarkdown(html);
}
