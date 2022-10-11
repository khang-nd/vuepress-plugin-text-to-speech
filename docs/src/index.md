---
sidebar: auto
---

# Guide

<center><read-button /> ← <i>Demo</i></center>

Vuepress Text To Speech Plugin allows you to create a __renderless component__ that reads aloud the text content on the page.

::: tip Renderless components
As the name implies, these components do not render any HTML output, but rather just act as a logic wrapper for the inner components.
:::

::: warning Important
This plugin only works with __Vuepress 1.x__.
:::

## How it works

The plugin performs some basic DOM queries to collect the text content (including the headings, paragraphs and lists) on the page, and uses the [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) to read aloud the collected text.

## Installation

<code-group>
<code-block title="npm">
```sh
npm i --save-dev vuepress-plugin-text-to-speech
```
</code-block>

<code-block title="yarn">
```sh
yarn add -D vuepress-plugin-text-to-speech
```
</code-block>
</code-group>

Define the plugin in `config.js`:

```js
// config.js
module.exports = {
  ...
  plugins: [
    ['text-to-speech', { selector: '.content__default' }]
  ]
}
```

The `selector` option can be defined globally here or locally with the [component props](/api.md#component-props).

## Usage

After the above steps, a `<text-to-speech>` component will be accessible anywhere in your project. To use it, wrap it around the control element:

```html
<text-to-speech #default="{ toggle }">
  <button @click="toggle">Toggle text-to-speech mode</button>
</text-to-speech>
```

Through the default slot, the component exposes a single `toggle` function that can be used by the control element to trigger on/off the text-to-speech mode on the current page.

___For more options, refer to the complete [API Reference](/api.md).___
