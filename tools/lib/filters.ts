import { download_list } from './download_list';
import { ArrayM } from './util';

/**
 * >>= for Array monad
 */
function arrayBind<T>(array: T[], transformer: (i: T, lineNo?: number) => T[]): T[] {
    let result: T[] = [];

    array.forEach((value, index) => {
        const p = transformer(value, index);
        result = result.concat(p);
    });

    return result;
}

/**
 * #### 
 */
export function filter_md(md: string): string {
    // non-empty lines from md
    const lines = md.split(/[\r\n]+/);

    const newLines = new ArrayM(lines)
        .bind(format_metadata)
        .toArray();

    return newLines.join("\n\n") + "\n";
}

function title_exists(title: string) {

    let found = false;
    download_list.forEach((item) => {
        found = found || (item.title === title) || (item.title_zh === title);
    })

    return found;
}

// 识别元数据(标题/作者/译者) 并设为# (见 `/TypeSetting.md` )
function format_metadata(line: string, lineNo: number): string[] {
    if (lineNo < 5 && title_exists(line)) {
        return [`## ${line}`];
    }

    if (lineNo < 10 && /(作者|译者|原著).*[:：]/i.exec(line) && !/译者声明/i.exec(line)) {
        return [`#### ${line}`];
    }

    if (/^the end/i.exec(line)) {
        return [`### ${line}`, '---------------------'];
    }

    return [line];
}
