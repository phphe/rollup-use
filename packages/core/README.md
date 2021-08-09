# `@rollup-use/core`

A pure-js npm library bundle tool use rollup.

此工具使用 rollup, 可以打包纯 js 的 npm 库项目. [中文文档](#zh)

## Usage

Install dependencies

```sh
npm install @rollup-use/core @babel/runtime -save
npm install typescript --save-dev
```

Create directory `scripts`, copy `build.ts` into it. Add 2 lines to `scripts` of `package.json` like follow:

```json
"scripts": {
  "compile-build-lib": "tsc --target ES6 --module CommonJS scripts/build.ts",
  "build-lib": "rollup -c scripts/build.js & node scripts/build.js --report"
}
```

Check `scripts/build.ts` and change it for your requirement. In most case, you may only need to change `input`. Once `scripts/build.ts` changed, execute `npm run compile-build-lib` to generate `scripts/build.js`. Then execute `npm run build-lib` to generate the final results.

## Exclude core-js

Don't include core-js in your package.json, including `dependencies` and `devDependencies`. Or there will be `core-js` imports in your bundled results.

# 中文文档<a name="zh"></a>

## 使用

安装依赖

```sh
npm install @rollup-use/core @babel/runtime -save
npm install typescript --save-dev
```

创建目录 `scripts`, 把`build.ts`复制进去. 参照如下, 添加两行到`package.json`的`scripts`:

```json
"scripts": {
  "compile-build-lib": "tsc --target ES6 --module CommonJS scripts/build.ts",
  "build-lib": "rollup -c scripts/build.js & node scripts/build.js --report"
}
```

按你的需求修改`scripts/build.ts`. 多数情况下你可能只需要修改`input`变量. 一旦`scripts/build.ts`有改动, 执行 `npm run compile-build-lib` 以生成 `scripts/build.js`. 再执行 `npm run build-lib` 即可生成最终结果.

## 排除 core-js

不要在 `package.json` 中包含 `core-js`, 包括 `dependencies` 和 `devDependencies`. 或者你的捆绑结果中会有 `core-js` 导入.
