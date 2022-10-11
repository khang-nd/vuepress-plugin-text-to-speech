# vuepress-plugin-text-to-speech

[![NPM VERSION](https://img.shields.io/npm/v/vuepress-plugin-text-to-speech.svg)](https://www.npmjs.com/package/vuepress-plugin-text-to-speech)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/vuepress-plugin-text-to-speech.svg)](https://www.npmjs.com/package/vuepress-plugin-text-to-speech)

Vuepress Text To Speech Plugin allows you to create a renderless component that reads aloud the text content on the page.

__Requires Vuepress 1.x.__

## 🚀 Quick start

```sh
npm i --save-dev vuepress-plugin-text-to-speech

# or

yarn add -D vuepress-plugin-text-to-speech
```

```js
// config.js
module.exports = {
  ...
  plugins: [
    ['text-to-speech', { /* options */ }]
  ]
}
```

```html
<text-to-speech #default="{ toggle }">
  <button @click="toggle">Toggle TTS</button>
</text-to-speech>
```

## 📚 Documentation & Demo

Refer to: https://khang-nd.github.io/vuepress-plugin-text-to-speech
