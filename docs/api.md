---
sidebar: auto
---

# API Reference

## Plugin options

```js
// config.js
module.exports = {
  ...
  plugins: [
    ['text-to-speech', { /* options */ }]
  ]
}
```

### `contentSelector`

* Type: `string`
* Default: `.content__default`

Specifies the text container selector globally, may be overridden by the [`selector` prop](#selector) on the component.

```js
// config.js
module.exports = {
  ...
  plugins: [
    ['text-to-speech', { contentSelector: '.my_content_selector' }]
  ]
}
```

## Component slot data

### `default`

Exposed object:

* `toggle` - A function to toggle the text-to-speech mode.

```html
<text-to-speech #default="{ toggle }">
  <button @click="toggle">Toggle TTS</button>
</text-to-speech>
```

## Component props

### `selector`

* Type: `string`
* Default: plugin's [`contentSelector` option](#contentselector)

Specifies the text container selector on component level.

```html
<text-to-speech #default="{ toggle }" selector=".my_content_selector">
  ...
</text-to-speech>
```

### `content`

* Type: `string`

Specifies the text content to be read, rather than querying the text content on the page with the selectors. Useful to override the text from outside of the TTS component.

```html
<text-to-speech #default="{ toggle }" content="Read me instead!">
  ...
</text-to-speech>
```

## Component events

### `@supported`

Returns a boolean value indicating whether the [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) is supported for the current browser.

```vue
<template>
  <text-to-speech @supported="setSupported" v-if="isSupported">
    ...
  </text-to-speech>
</template>

<script>
  export default {
    data() {
      return {
        isSupported: false
      }
    },
    methods: {
      setSupported(value) {
        this.isSupported = value;
      }
    }
  }
</script>
```

### `@statechange`

Observes and returns the utterance's state. Possible state values:

* `playing`
* `paused`
* `resumed`
* `stopped`

```vue
<template>
  <text-to-speech @statechange="onStateChange">
    <button>
        <template v-if="state === 'stopped'">Start</template>
        <template v-else-if="state === 'paused'">Resume</template>
        <template v-else>Pause</template>
    </button>
  </text-to-speech>
</template>

<script>
  export default {
    data() {
      return {
        state: ''
      }
    },
    methods: {
      onStateChange(value) {
        this.state = value;
      }
    }
  }
</script>
```
