export const redirects = JSON.parse("{\"/essays/OI/2024.10/P1054%20%5BNOIP2005%20%E6%8F%90%E9%AB%98%E7%BB%84%5D%20%E7%AD%89%E4%BB%B7%E8%A1%A8%E8%BE%BE%E5%BC%8F.html\":\"/essays/OI/2024.10/P1054%20_NOIP2005%20%E6%8F%90%E9%AB%98%E7%BB%84_%20%E7%AD%89%E4%BB%B7%E8%A1%A8%E8%BE%BE%E5%BC%8F.html\"}")

export const routes = Object.fromEntries([
  ["/OI.html", { loader: () => import(/* webpackChunkName: "OI.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/OI.html.js"), meta: {"title":"这里是 HeH_NCu 信竞专栏，许多题解都在这哦"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"这里是HeH_NCu 的个人网站"} }],
  ["/essays/OI/2024.10/2024.10.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_2024.10.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/2024.10.html.js"), meta: {"title":"P1054 [NOIP2005 提高组] 等价表达式"} }],
  ["/essays/OI/2024.10/P1054%20_NOIP2005%20%E6%8F%90%E9%AB%98%E7%BB%84_%20%E7%AD%89%E4%BB%B7%E8%A1%A8%E8%BE%BE%E5%BC%8F.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_P1054 _NOIP2005 提高组_ 等价表达式.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/P1054 _NOIP2005 提高组_ 等价表达式.html.js"), meta: {"title":"你好"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
