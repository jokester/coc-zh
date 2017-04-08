# HOW-TOs

这是我一般的维护流程, 供参考:

## 增加文章

1. 修改 `tools/lib/download_list.ts`, 增加html链接
2. 运行 `npm run fetch` 下载html
3. 运行 `npm run convert` 转换 *所有* html到markdown.
3. 只提交 *新文章的* markdown. 不要提交无关的, 被html转换覆盖的markdown

## 更新文章 (翻译)

1. 删掉 `tools/raw`内的相应html, 重新运行 `npm run fetch`
2. `git diff` 查看翻译的变更, 并手工合并到markdown
3. 将新html和修改后的markdown一起提交

## 更新文章 (非翻译)

1. 直接更新markdown