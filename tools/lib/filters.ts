import { download_list } from './download_list';
import { ArrayM, logger_normal as logger } from './util';

const hr = '-----------';

interface FilterState {
    footmarkUsed: number;
    footmarkProvided: number;
}

/**
 * 修正html转换成的md的格式
 */
export function filter_md(md: string, itemDesc: string): string {
    // non-empty lines from md
    const lines = md.split(/[\r\n]+/);

    const state: FilterState = {
        footmarkUsed: 0,
        footmarkProvided: 0
    };

    const newLines = new ArrayM(lines)
        .map(trimRight)
        .map(trimLeft)
        .map(replace_translators)
        .map(fix_title)
        .map(change_hr)
        .map(beautify_parensis)
        .map(to_footnote_content.bind(null, state))
        .map(to_footnote_mark.bind(null, state))
        .bind(format_parts)
        .bind(format_metadata)
        .tap(removeConsecutiveHR)
        .bind(dropLastHR)
        .toArray();

    if (state.footmarkUsed !== state.footmarkProvided) {
        logger.w(`${itemDesc} footmarkUsed=${state.footmarkUsed} /= footmarkProvided=${state.footmarkProvided}`);
    }

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

// 给章节号加上### / ----
function format_parts(line: string, lineNo: number): string[] {
    if (line.length < 15 && /^[IVXC]+\.?$/.exec(line)) {
        return [hr, `### ${line}`];
    }

    {
        const m = /^(\*\*)?\s*(the\s+end)\s*(\*\*)?/i.exec(line);
        if (m) {
            return [`### ${m[2]}`, hr];
        }
    }

    if (line.length < 15 && /^Chapter\s+[IXVC\d]+/.exec(line)) {
        return [hr, `### ${line}`];
    }

    {
        const m = /^\*\*((Chapter\s*)?([\dIVXC])+\s*[.]?(:.*?)?)\*\*$/i.exec(line);
        if (m) {
            return [hr, `### ${m[1]}`];
        }
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
        return hr;
    }
    return line;
}

function removeConsecutiveHR(lines: string[]): string[] {

    const result = [] as string[];

    let prevIsHr = false;

    lines.forEach((l) => {
        if (l === hr && prevIsHr) { }
        else if (l === hr) {
            prevIsHr = true;
            result.push(l);
        } else {
            prevIsHr = false;
            result.push(l);
        }
    });

    return result;
}

/**
 * 去掉行首的空白
 */
function trimLeft(line: string): string {
    if (/^[\s　]{1,2}/.exec(line) && ! /^\s{3,}/.exec(line))
        return line.replace(/^[\s　]+/, '');

    return line;
}

/**
 * 去掉行末的空白
 */
function trimRight(line: string): string {
    return line.replace(/\s*$/, '');
}

/**
 * 去掉文末的<hr/>
 */
function dropLastHR(line: string, lineNum: number, wholeArray: string[]): string[] {
    if (line === hr && lineNum === (wholeArray.length - 1))
        return [];

    return [line];
}

/**
 * 将   汉字(ooo)汉字   替换为 汉字 (ooo) 汉字
 * 并统一为半角括号
 */
function beautify_parensis(line: string): string {
    return line.replace(/(.)[(（](.*?)[)）](.)/, function (matched, left, inside, right) {
        if (left !== ']')
            return `${left} (${inside}) ${right}`;

        return matched;
    })
}

/**
 * 脚注链接: 将 `[注n]`替换为`[^m]`
 * 重新编号的状态在state
 * 
 * 见 https://github.com/GitbookIO/gitbook/issues/395
 */
function to_footnote_mark(state: FilterState, line: string): string {
    return line.replace(/(?!^)\[注(\d*?)\]/g, function (matched, footmarkNo) {
        return `[^${++state.footmarkUsed}]`;
    });
}

/**
 * 脚注内容 (重新编号)
 */
function to_footnote_content(state: FilterState, line: string): string {

    function wtf(matched: any, footmarkNo: any, content: string) {
        return `[^${++state.footmarkProvided}]: ${content}`;
    };

    const l1 = line.replace(/^_\[注(\d*[:：]?)\](.*)_$/, wtf);
    const l2 = l1.replace(/^_?\[注(\d*[:：]?)(.*?)\]?_?$/, wtf);

    return l2;
}