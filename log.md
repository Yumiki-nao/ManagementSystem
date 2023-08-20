# 1.项目初始化

## 1.1初始化项目

本项目使用vite进行构建

vite初始化指令

```bash
$ npm create vite@latestv
```



## 1.2项目配置

### 1.2.1eslint配置

**安装**

```bash
$ npm i eslint -D
```

**生成配置文件：.eslint.cjs**

```bash
$ npx eslint --init
```

**安装vue3环境校验代码插件**

```bash
$ npm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```

**修改.eslint.cjs**

```js
// @see https://eslint.bootcss.com/docs/rules/

module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true,
    },
    /* 指定如何解析语法 */
    parser: 'vue-eslint-parser',
    /** 优先级低于 parse 的语法解析配置 */
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
      jsxPragma: 'React',
      ecmaFeatures: {
        jsx: true,
      },
    },
    /* 继承已有的规则 */
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['vue', '@typescript-eslint'],
    /*
     * "off" 或 0    ==>  关闭规则
     * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
     * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
     */
    rules: {
      // eslint（https://eslint.bootcss.com/docs/rules/）
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁止不必要的转义字符
  
      // typeScript (https://typescript-eslint.io/rules)
      '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
      '@typescript-eslint/semi': 'off',
  
      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
      'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
      'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
      'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    },
  }
  
```

**配置.eslintignore**

```
dist
node_moudles
```

**添加运行脚本**

```json
"script": {
    "lint": "eslint src",
    "fix": "eslint src --fix"
}
```

### 1.2.2prettier配置

有了eslint，为什么还要有prettier？eslint针对的是javascript，他是一个检测工具，包含js语法以及少部分格式问题，在eslint看来，语法对了就能保证代码正常运行，格式问题属于其次；

而prettier属于格式化工具，它看不惯格式不统一，所以它就把eslint没干好的事接着干，另外，prettier支持

包含js在内的多种语言。

总结起来，**eslint和prettier这俩兄弟一个保证js代码质量，一个保证代码美观。**

**安装依赖包**

```bash
$ npm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

**prettierrc.json添加规则**

```
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

**prettierignore忽略文件**

```
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

**通过pnpm run lint去检测语法，如果出现不规范格式,通过pnpm run fix 修改**

## 1.3项目集成

### 1.3.1集成element-plus

项目的UI组件库采用的element-plus，因此需要集成element-plus插件！！！

官网地址:https://element-plus.gitee.io/zh-CN/

```
npm install element-plus @element-plus/icons-vue
```

**入口文件main.ts全局安装element-plus,element-plus默认支持语言英语设置为中文**

```
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, {
    locale: zhCn
})
```



**Element Plus全局组件类型声明**

```
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

配置完毕可以测试element-plus组件与图标的使用.
