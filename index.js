const { resolve } = require("path");

module.exports = (options, ctx) => ({
  name: "vuepress-plugin-text-to-speech",
  define() {
    return {
      SELECTOR: options.contentSelector || ".content__default",
    };
  },
  plugins: [
    [
      "@vuepress/register-components",
      { componentsDir: resolve(__dirname, "./components") },
    ],
  ],
});
