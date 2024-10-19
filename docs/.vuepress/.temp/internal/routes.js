export const redirects = JSON.parse("{\"/essays/OI/2024.10/P1131%20%5BZJOI2007%5D%20%E6%97%B6%E6%80%81%E5%90%8C%E6%AD%A5.html\":\"/essays/OI/2024.10/P1131%20_ZJOI2007_%20%E6%97%B6%E6%80%81%E5%90%8C%E6%AD%A5.html\",\"/essays/OI/2024.10/P2734%20%5BUSACO3.3%5D%20%E6%B8%B8%E6%88%8F%20A%20Game.html\":\"/essays/OI/2024.10/P2734%20_USACO3.3_%20%E6%B8%B8%E6%88%8F%20A%20Game.html\",\"/essays/OI/2024.10/P2736%20%5BUSACO3.4%5D%20%E2%80%9C%E7%A0%B4%E9%94%A3%E6%91%87%E6%BB%9A%E2%80%9D%E4%B9%90%E9%98%9F%20Raucous%20Rockers.html\":\"/essays/OI/2024.10/P2736%20_USACO3.4_%20%E2%80%9C%E7%A0%B4%E9%94%A3%E6%91%87%E6%BB%9A%E2%80%9D%E4%B9%90%E9%98%9F%20Raucous%20Rockers.html\",\"/essays/OI/2024.10/P2979%20%5BUSACO10JAN%5D%20Cheese%20Towers%20S.html\":\"/essays/OI/2024.10/P2979%20_USACO10JAN_%20Cheese%20Towers%20S.html\"}")

export const routes = Object.fromEntries([
  ["/OI.html", { loader: () => import(/* webpackChunkName: "OI.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/OI.html.js"), meta: {"title":"这里是 HeH_NCu 信竞专栏"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello World"} }],
  ["/essays/OI/2024.10/2024.10.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_2024.10.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/2024.10.html.js"), meta: {"title":"文章"} }],
  ["/essays/OI/2024.10/P1131%20_ZJOI2007_%20%E6%97%B6%E6%80%81%E5%90%8C%E6%AD%A5.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_P1131 _ZJOI2007_ 时态同步.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/P1131 _ZJOI2007_ 时态同步.html.js"), meta: {"title":"P1131 [ZJOI2007] 时态同步"} }],
  ["/essays/OI/2024.10/P1280%20%E5%B0%BC%E5%85%8B%E7%9A%84%E4%BB%BB%E5%8A%A1.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_P1280 尼克的任务.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/P1280 尼克的任务.html.js"), meta: {"title":"P1280 尼克的任务"} }],
  ["/essays/OI/2024.10/P2734%20_USACO3.3_%20%E6%B8%B8%E6%88%8F%20A%20Game.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_P2734 _USACO3.3_ 游戏 A Game.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/P2734 _USACO3.3_ 游戏 A Game.html.js"), meta: {"title":"P2734 [USACO3.3] 游戏 A Game"} }],
  ["/essays/OI/2024.10/P2736%20_USACO3.4_%20%E2%80%9C%E7%A0%B4%E9%94%A3%E6%91%87%E6%BB%9A%E2%80%9D%E4%B9%90%E9%98%9F%20Raucous%20Rockers.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_P2736 _USACO3.4_ “破锣摇滚”乐队 Raucous Rockers.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/P2736 _USACO3.4_ “破锣摇滚”乐队 Raucous Rockers.html.js"), meta: {"title":"P2736 [USACO3.4] “破锣摇滚”乐队 Raucous Rockers"} }],
  ["/essays/OI/2024.10/P2979%20_USACO10JAN_%20Cheese%20Towers%20S.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_P2979 _USACO10JAN_ Cheese Towers S.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/P2979 _USACO10JAN_ Cheese Towers S.html.js"), meta: {"title":"P2979 [USACO10JAN] Cheese Towers S"} }],
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
