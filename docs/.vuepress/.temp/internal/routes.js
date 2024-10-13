export const redirects = JSON.parse("{\"/essays/OI/2024.10/P2734%20%5BUSACO3.3%5D%20%E6%B8%B8%E6%88%8F%20A%20Game.html\":\"/essays/OI/2024.10/P2734%20_USACO3.3_%20%E6%B8%B8%E6%88%8F%20A%20Game.html\"}")

export const routes = Object.fromEntries([
  ["/OI.html", { loader: () => import(/* webpackChunkName: "OI.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/OI.html.js"), meta: {"title":"这里是 HeH_NCu 信竞专栏"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"这里是HeH_NCu 的个人网站"} }],
  ["/essays/OI/2024.10/2024.10.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_2024.10.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/2024.10.html.js"), meta: {"title":"文章"} }],
  ["/essays/OI/2024.10/P2734%20_USACO3.3_%20%E6%B8%B8%E6%88%8F%20A%20Game.html", { loader: () => import(/* webpackChunkName: "essays_OI_2024.10_P2734 _USACO3.3_ 游戏 A Game.html" */"D:/WebPages/dunUY.cn/HeHNCu.github.io/HeHNCu/docs/.vuepress/.temp/pages/essays/OI/2024.10/P2734 _USACO3.3_ 游戏 A Game.html.js"), meta: {"title":"P2734 [USACO3.3] 游戏 A Game"} }],
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
