# vuepress-plugin-text-to-speech

Vuepress Text To Speech Plugin allows you to create a renderless component that reads aloud the text content on the page.

## 🚀 Quick start

```sh
npm i --save-dev vuepress-plugin-text-to-speech

or

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
