import fs = require('fs');
import path = require('path');

import * as Q from 'q';

const readdirP: (start: string) => Promise<string[]> = Q.denodeify(fs.readdir) as any;
const statP: (path: string) => Promise<fs.Stats> = Q.denodeify(fs.stat) as any;
const readFileP: (path: string) => Promise<Buffer> = Q.denodeify(fs.readFile) as any;


export async function readLinesP(path: string) {
    const data = await readFileP(path);
    return data.toString().split(/\r\n|\r|\n/);
}

export const writeLinesP: (path: string, lines: string[]) => Promise<{}> = (path, lines) => new Promise((resolve, reject) => {
    fs.writeFile(path, lines.join("\n"), function (err: any) {
        if (err) reject(err);
        else resolve();
    });
});

/**
 * find as
 */
export async function findFilesP(start: string) {
    let children = [] as string[];

    const result = await readdirP(start);

    for (const child of result) {
        const child_path = path.join(start, child);
        const s = await statP(child_path);
        if (s.isFile()) {
            children.push(child_path);
        } else if (s.isDirectory()) {
            children = children.concat(await findFilesP(child_path));
        }
    }

    return children;
}

interface TextFilter {
    (input: string[]): string[]
}

export async function filterFile(path: string, filter: TextFilter) {

}