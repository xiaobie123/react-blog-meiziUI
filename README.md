# Amaze UI React 练习博客系统

基于 React、Amaze UI 组件、react-router 及 gulp 开发 SPA。


## 目录结构

项目文件放在 `app` 目录下：

```
.app
├── humans.txt
├── i              // 图片
├── index.html     // 入口 HTML
├── js             // JS
├── less           // Less
├── manifest.json
├── manifest.webapp
└── robots.txt
```

## 使用说明

### 全局安装 gulp：

```
npm install gulp -g
```

### 安装开发依赖

1. 克隆或下载本项目；
2. 进入项目目录，执行 `npm install`；

### 开发

```
npm start
```

### 生产环境构建

设置 Node 环境变量为 `production` 后，HTML 中引用的 CSS 和 JS 会替换为 minify 的版本。

```
npm run build
```

## 效果 ##
[demo地址](https://xiaobie123.github.io/react-blog-meiziUI/%E5%9B%BE%E7%89%87/jdfw3.gif)
最后把这张图片下载下来看，在线看，有点卡