import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import MarkdownItKatex from "markdown-it-katex";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text : '首页',
        link : '/'
      },
      {
        text : '信竞',
        link : '/OI.md'
      }
    ],
  }),
  extendsMarkdown: (md) => {
    md.use(MarkdownItKatex);
  },
  title : 'HeH_NCu' 
})