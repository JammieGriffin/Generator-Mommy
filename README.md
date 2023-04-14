# Generator-Mommy

<p>
<img src="https://img.shields.io/github/license/JammieGriffin/generator-mommy" />
<img src="https://img.shields.io/github/package-json/v/JammieGriffin/generator-mommy" />
</p>

## 简介

Generator-Mommy 是基于 Yeoman 的项目。该项目提供了 Express 和 Vue3 项目的脚手架模板，一个命令即可快速生成项目的脚手架，使你可以更加专注于项目本身而不必花太多时间在项目的组织方式和项目基本依赖的下载上，提高你的开发效率。

## 安装

```shell
# 安装 yeoman 和 generator-mommy
npm i -g yo generator-mommy
```

## 使用

```shell
# 生成 Express 项目
yo mommy
# 使用 typescript
yo mommy:app-ts

# 生成 Vue3 项目
yo mommy:vue
# 使用 typescript
yo mommy:vue-ts
```

## 模板结构

```shell
# express
├── .eslintrc.json
├── .gitignore
├── app.mjs
├── const.mjs
└── src
    ├── middleware
    │   └── errorHandler.mjs
    ├── router
    │   ├── example.mjs
    │   └── index.mjs
    └── utils
        └── index.mjs

# express + ts
├── .env.dev
├── .env.prod
├── .eslintrc.js
├── app.ts
├── const.ts
├── nodemon.json
├── src
│   ├── events
│   │   └── example.ts
│   ├── middleware
│   │   └── errorHandler.ts
│   ├── router
│   │   ├── example.api.ts
│   │   └── index.api.ts
│   ├── sql
│   │   ├── index.ts
│   │   └── initDB.ts
│   ├── types
│   │   └── index.d.ts
│   └── utils
│       └── index.util.ts
└── tsconfig.json

# vue
├── .eslintrc.json
├── .gitignore
├── index.html
├── public
│   └── vite.svg
├── src
│   ├── App.vue
│   ├── api
│   │   └── BaseAxios.js
│   ├── assets
│   │   └── vue.svg
│   ├── components
│   ├── const.js
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   ├── style.css
│   └── views
│       └── HelloMommy.vue
└── vite.config.js

# vue + ts
├── .eslintrc.json
├── .gitignore
├── index.html
├── index.mjs
├── public
│   └── vite.svg
├── src
│   ├── App.vue
│   ├── api
│   │   └── axiosInst.ts
│   ├── assets
│   │   └── vue.svg
│   ├── components
│   │   └── HelloWorld.vue
│   ├── const.ts
│   ├── hooks
│   │   └── index.ts
│   ├── main.ts
│   ├── router
│   │   └── index.ts
│   ├── store
│   │   └── index.ts
│   ├── style.css
│   ├── types
│   │   └── commomResponse.d.ts
│   ├── views
│   │   └── HelloMommy.vue
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
