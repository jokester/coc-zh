/**
 * Converts TROW bbcode to markdown
 */
import { Map } from 'immutable';
import * as cheerio from 'cheerio';

module BBParse {
    // a span without newline in it
    export interface Span {
        center: boolean;
        right: boolean;
        size: number;
        bold: boolean;
        italic: boolean;
        text: string;
    }

    // multiple spans forms a paragraph
    export type Paragraph = Span[];

    class BBContext {
        center = false;
        right = false;
        size = 1;
        bold = false;
        italic = false;

        result: Paragraph[] = []
        tempPar: Paragraph = []
        tempSpan = "";

        pushCMD(bbCMD: string): boolean {
            const prevSpan = this.currentSpan();

            const statusChanged = this.tryCMD(bbCMD);
            if (statusChanged) {
                prevSpan && this.tempPar.push(prevSpan);
                this.tempSpan = "";
                return true;
            } else {
                return false;
            }
        }

        /**
         * @param bbCmd BBCode command inside []
         * @return whether the command is recognized (i.e state changed)
         */
        tryCMD(bbCmd: string): boolean {
            if (/^\/?quote/.exec(bbCmd)) {
                return true;
            }
            switch (bbCmd) {
                case "b":
                    return this.bold = true;
                case "i":
                    return this.italic = true;
                case "center":
                    return this.center = true;
                case "right":
                    return this.right = true;
                case "/b":
                    return !(this.bold = false);
                case "/i":
                    return !(this.italic = false);
                case "/center":
                    return !(this.center = false);
                case "/right":
                    return !(this.right = false);
                case "/size":
                    this.size = 1;
                    return true;
            }

            const matchSetSize = /^size=(\d+)$/.exec(bbCmd);
            if (matchSetSize) {
                this.size = parseInt(matchSetSize[1]);
                return true;
            }
            return false;
        }

        pushSpan(span: string) {
            this.tempSpan = this.tempSpan + span.trim();
        }

        linebreak() {
            const currentSpan = this.currentSpan();
            currentSpan && this.tempPar.push(this.currentSpan());
            this.result.push(this.tempPar);
            this.tempPar = [];
            this.tempSpan = '';
        }

        private currentSpan(): Span {
            if (!this.tempSpan) {
                return null;
            }
            return {
                center: this.center,
                right: this.right,
                size: this.size,
                bold: this.bold,
                italic: this.italic,
                text: this.tempSpan,
            };
        }
    }

    export function parseBBCode(bbtext: string): Paragraph[] {

        const ctx = new BBContext();
        const bbRegex = /\[|\]|\n|[^\[\]\n]+/g;

        // const bbRegex = /^\[|\]|\n|[^\[\]\\n]+$/g;
        const bbTokens = regexScan(bbtext, bbRegex);

        let tokIndex = 0;

        while (tokIndex < bbTokens.length) {
            const t0 = bbTokens[tokIndex];
            const t1 = bbTokens[tokIndex + 1];
            const t2 = bbTokens[tokIndex + 2];

            if (t0 === '\n') {
                ctx.linebreak();
                tokIndex++;
                continue;
            }

            if (t0 === '[' && t2 === ']') {
                const wasCMD = ctx.pushCMD(t1);
                if (wasCMD) {
                    tokIndex += 3;
                    continue;
                }
            }

            ctx.pushSpan(t0);
            tokIndex++;
        }

        return ctx.result.filter(p => p.length);
    }
}

module MarkdownWriter {
    export function toMarkdown(paragraphs: BBParse.Paragraph[]): string[] {

        const mdLines = paragraphs.map((bbParagraph) => {
            let mdLine = "";

            bbParagraph.forEach((bbSpan) => {
                if (bbSpan.size === 3 || bbSpan.center) {
                    mdLine += `## ${bbSpan.text}`;
                    return;
                } else if (bbSpan.size === 2 || bbSpan.right) {
                    mdLine += `#### ${bbSpan.text}`;
                    return;
                } else if (bbSpan.size !== 1) {
                    throw `incorrect size: ${JSON.stringify(bbSpan)}`;
                }

                const tokensBefore: string[] = [];
                const tokensAfter: string[] = [];

                const tokens = [
                    bbSpan.bold ? "**" : "",
                    bbSpan.italic ? "_" : "",
                    bbSpan.text.replace(/[_*]/, pre => `\${pre}`),
                    bbSpan.italic ? "_" : "",
                    bbSpan.bold ? "**" : "",
                ];
                mdLine += tokens.join('');
            });

            return mdLine;
        })

        return mdLines;
    }
}


export function regexScan(str: string, re: RegExp) {
    if (!re.global)
        throw "global flag expected";
    const r: string[] = [];
    str.replace(re, function (substr) {
        r.push(substr);
        return '';
    });
    return r;
}

export const parseBBCode = BBParse.parseBBCode;

export const toMarkdown = MarkdownWriter.toMarkdown;

export const bb2Markdown = function (bbcode: string) {
    const parsed = parseBBCode(bbcode);
    const mdLines = toMarkdown(parsed);
    return mdLines.join("\n\n");
}

/**
 * return content inside "<textarea #postcontent>""
 */
export function getPostContent(html_str: string): string {
    const ctx = cheerio.load(html_str);
    const textarea = ctx("#postcontent");
    if (textarea.length !== 1) {
        throw "cannot determine #postcontent";
    }
    return textarea.text();
}