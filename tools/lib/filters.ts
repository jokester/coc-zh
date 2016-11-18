import { download_list } from './download_list';
import { ArrayM } from './util';

/**
 * 修正html转换成的md的格式
 */
export function filter_md(md: string): string {
    // non-empty lines from md
    const lines = md.split(/[\r\n]+/);

    const newLines = new ArrayM(lines)
        .map(replace_translators)
        .map(fix_title)
        .map(change_hr)
        .bind(format_parts)
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

    return [line];
}

// 笨拙的译者 -> 译者
function replace_translators(line: string, lineNo: number): string {
    if (lineNo < 20 && /笨拙的译者/.exec(line) && /竹子/.exec(line)) {
        return line.replace('笨拙的译者', '译者');
    }

    return line;
}

// 给章节号加上###
function format_parts(line: string, lineNo: number): string[] {
    if (line.length < 15 && /^[IVXC]+\.?$/.exec(line)) {
        return [`### ${line}`];
    }

    if (/^the end/i.exec(line)) {
        return [`### ${line}`, '---------------------'];
    }

    return [line];
}

// 去除标题左右的** **
function fix_title(line: string, lineNo: number): string {
    if (lineNo > 5) return line;

    const matched = /^\*\*(.*?)\*\*$/.exec(line);
    if (matched && matched[1] && title_exists(matched[1]))
        return matched[1];

    return line;
}

// remove "This post has been edited by **Frend**: 2015-08-09, 12:39"
function filter_trow_edit(line: string, lineNo: number): string {
    const matched = /^This post has been edited by [\:]+: ¥\d{4}-\d{2}-\d{2}, \d+:\d{2}(.*)$/i.exec(line);
    if (matched) {
        return matched[1];
    }

    return line;
}

// replace ———————— to ------

function change_hr(line: string) {
    if (/^—{3,}$/.exec(line)) {
        return '-----------';
    }
    return line;
}
