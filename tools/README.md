# Tools

用于收集和整理内容的脚本 (node + TypeScript/JavaScript)。

```
- raw/ 源文件(如bbcode)
- transform.ts  将源文件转换为 Markdown (转换列表在文件内)
- fetch-trow.ts  从trow论坛抓取内容 (下载列表也在文件内，执行时需要注册用户的cookie)
- lib/ 上面的ts需要的其他模块
```

执行时需安装package.json内的npm包

(执行.ts时用ts-node)
