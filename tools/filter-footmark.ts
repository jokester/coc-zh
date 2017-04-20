/**
 * 修复markdown
 * - 重新给脚注编号
 */

import { findFilesP, readLinesP, writeLinesP } from './lib/util2';

namespace Filters {
    /**
     * 重新标记footnote
     */
    export function renumber_footnote(lines: string[]) {

        let new_lines = [];
        let num_footnote = 0;
        // 旧footnote编号 -- 新footnote编号
        const footnote_mapping = {} as any;
        for (const line of lines) {
            let matched: string[];
            // (不在行首的) [^数字]
            const footnote_mark = /(.)\[\^(\d+)\]/g;
            // 行首的 [^数字]:
            const footnote_def = /^\[\^(\d+)\]:/;

            const new_line = line.replace(footnote_mark, function (matched: string, before: string, a: string) {
                const old_id = parseInt(a);
                const new_id = ++num_footnote;
                footnote_mapping[old_id] = new_id;

                // console.log(`${old_id} -> ${new_id}`);
                return `${before}[^${new_id}]`;
            });

            const new_line2 = new_line.replace(footnote_def, function (matched: string, a: string) {
                const old_id = parseInt(a);
                const new_id = footnote_mapping[old_id] as number;

                // console.log(`${old_id} ==> ${new_id}`);
                if (!new_id) {
                    throw `footnote ${old_id} not defined before ${line}`;
                }
                return `[^${new_id}]:`;
            });

            new_lines.push(new_line2);
        }

        return new_lines;
    }
}

function filter_md_lines(input: string[]) {
    return Filters.renumber_footnote(input);
}

let file_no = 0;

async function filter_md_file(path: string) {
    const fno = file_no++;
    console.log(`converting file #${fno}: ${path}`)
    const lines = await readLinesP(path);
    const filtered = filter_md_lines(lines);
    await writeLinesP(path, filtered);
    console.log(`converting file #${fno}: ${path} ... DONE`)
}

async function main() {
    const files = process.argv.slice(2);
    if (!files.length) {
        console.error(`USAGE: ${process.argv0} [FILES]+`)
        process.exit(0);
    }
    const md_files = files.filter(f => /\.md$/i.exec(f));

    await Promise.all(md_files.map(filter_md_file));

    console.log('all done!');
}

main();