import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

export default defineConfig({
  title: "0-day",
  description: "掘金",
  themeConfig: {
    // 网站loggo
    logo: "/logo.jpg",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outline: "deep",
    // 页脚
    footer: {
      message: "你好🎉",
      copyright: "🔥Copyright ©你的学习笔记 ",
    },
    returnToTopLabel: "返回顶部",
    outlineTitle: "导航栏",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "归档",
    nav: [
      { text: "💭 学习笔记", link: "/start/" },
      {
        text: "🔥 面试题",
        items: [
          { text: "🔥 前端算法", link: "/" },
          { text: "🔥 设计模式", link: "/patterns/guide/" },
          { text: "📋 面试大全", link: "/interview/" },
        ],
      },
      {
        text: "前端导航",
        link: "https://roadmap.shengxinjing.cn/",
      },
    ],
    sidebar,
    // 社交账号
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  head: [
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
});
