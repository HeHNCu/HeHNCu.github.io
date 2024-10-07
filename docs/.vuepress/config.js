import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import MarkdownItKatex from "markdown-it-katex";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  extendsMarkdown: (md) => {
    md.use(MarkdownItKatex);
  },
})