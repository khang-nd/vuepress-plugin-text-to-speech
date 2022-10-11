(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{283:function(t,s,e){"use strict";e.r(s);var a=e(14),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[t._v("#")]),t._v(" Guide")]),t._v(" "),s("center",[s("read-button"),t._v(" ← "),s("i",[t._v("Demo")])],1),t._v(" "),s("p",[t._v("Vuepress Text To Speech Plugin allows you to create a "),s("strong",[t._v("renderless component")]),t._v(" that reads aloud the text content on the page.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Renderless components")]),t._v(" "),s("p",[t._v("As the name implies, these components do not render any HTML output, but rather just act as a logic wrapper for the inner components.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Important")]),t._v(" "),s("p",[t._v("This plugin only works with "),s("strong",[t._v("Vuepress 1.x")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"how-it-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),s("p",[t._v("The plugin performs some basic DOM queries to collect the text content (including the headings, paragraphs and lists) on the page, and uses the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpeechSynthesis API"),s("OutboundLink")],1),t._v(" to read aloud the collected text.")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"npm"}},[s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save-dev vuepress-plugin-text-to-speech\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"yarn"}},[s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" vuepress-plugin-text-to-speech\n")])])])])],1),t._v(" "),s("p",[t._v("Define the plugin in "),s("code",[t._v("config.js")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text-to-speech'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contentSelector")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.content__default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("contentSelector")]),t._v(" option can be defined globally here or locally with the "),s("RouterLink",{attrs:{to:"/api.html#component-props"}},[t._v("component props")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("After the above steps, a "),s("code",[t._v("<text-to-speech>")]),t._v(" component will be accessible anywhere in your project. To use it, wrap it around the control element:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text-to-speech")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#default")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ toggle }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("toggle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Toggle text-to-speech mode"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text-to-speech")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Through the default slot, the component exposes a single "),s("code",[t._v("toggle")]),t._v(" function that can be used by the control element to trigger on/off the text-to-speech mode on the current page.")]),t._v(" "),s("p",[s("em",[s("strong",[t._v("For more options, refer to the complete "),s("RouterLink",{attrs:{to:"/api.html"}},[t._v("API Reference")]),t._v(".")],1)])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);