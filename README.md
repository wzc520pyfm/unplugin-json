# unplugin-json

[![NPM version](https://img.shields.io/npm/v/unplugin-json?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-json)

🍣 A universal bundler plugin which Converts .json files to ES6 modules.

## Install

> If you just want to import the json file, you only need to use it in rollup. Other build tools have built-in support for json import.

```bash
npm i unplugin-json
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginJson from 'unplugin-json/vite'

export default defineConfig({
  plugins: [
    UnpluginJson({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginJson from 'unplugin-json/rollup'

export default {
  plugins: [
    UnpluginJson({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-json/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-json/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-json/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginJson from 'unplugin-json/esbuild'

build({
  plugins: [UnpluginJson()],
})
```

<br></details>
