interface DownloadItem {
    url: string
    type?: "trow" | "TODO"
    id?: string // if not defined, title will be used instead
    title: string
    title_zh: string
    prefix?: "HPL" | "TODO"
}

type DownloadList = DownloadItem[];

export function genFilename(item: DownloadItem) {
    return item.id || item.title.split(/[^0-9a-zA-Z]+/).join('-');
}

export function genFullname(item: DownloadItem) {
    return `${item.prefix || 'HPL'}/${genFilename(item)}`;
}

export const download_list: DownloadList = [
    {
        // ref
        url: "http://trow.cc/board/act=Post&CODE=02&f=82&t=24399&qpid=149586",
        title: "The Picture in the House",
        title_zh: "屋中画"
    },
    {
        url: "",
        title: "Deaf, Dumb, and Blind",
        title_zh: "聋，哑，瞎"
    }
];