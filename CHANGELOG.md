# Changelog

## 1.0.3

* Renamed the plugin option `selector` to `contentSelector` to avoid potential conflicts with other plugins.

## 1.0.2

* Moved the DOM content query from `mounted` to the `toggle` function to make sure the correct content is available on the fly, eg. when using as a [global UI component](https://vuepress.vuejs.org/plugin/option-api.html#globaluicomponents).

## 1.0.1

* Excluded the `docs` folder from npm.

## 1.0.0

* Package published to npm.
