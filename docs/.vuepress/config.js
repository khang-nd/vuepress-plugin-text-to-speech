module.exports = {
  title: "Vuepress Text To Speech Plugin",

  base: "/vuepress-plugin-text-to-speech/",

  themeConfig: {
    repo: "https://github.com/khang-nd/vuepress-plugin-text-to-speech",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "main",
    lastUpdated: true,
    nav: [
      {
        text: "Guide",
        link: "/",
      },
      {
        text: "API Reference",
        link: "/api",
      },
    ],
  },

  plugins: [[require("../../index")]],
};
