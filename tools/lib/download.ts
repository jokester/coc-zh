
export interface DownloadSource {
    // 页面url
    url: string
    // CSS selector
    selector: string[]
}

/**
 * selector
 */
export interface DownloadItem {

    // 下载源
    source: [DownloadSource]

    /**
     * id: 决定保存的文件名
     * (如果没有，会从title生成一个能用作文件名的)
     */
    id?: string

    /**
     * 标题
     */
    title: string
    title_zh: string

    /**
     * prefix: 分类，用于生成保存路径
     */
    prefix: "HPL" | "TODO"
}

export type DownloadList = DownloadItem[];