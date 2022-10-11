module.exports = {
  title: "Vuepress Text To Speech Plugin",

  base: "/vuepress-plugin-text-to-speech/",

  themeConfig: {
    repo: "https://github.com/visnalize/vuepress-plugin-text-to-speech",
    editLinks: true,
    docsDir: "src",
    lastUpdated: true,
    nav: [
      {
        text: "Guide",
        link: "/",
      },
      {
        text: "API Reference",
        link: "/api/",
      },
    ],
  },

  plugins: [[require("../../index")]],
};
