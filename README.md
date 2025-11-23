# TU-Designer (改图大师)

AI 智能设计评分与文件生成工具

## 功能特性

- 基于 Next.js 构建的现代 Web 应用
- 使用 ag-psd 库在浏览器中生成 PSD 文件
- 支持创建包含多图层的 PSD 文件（背景层、文本层等）

## 安装依赖

```bash
npm install
```

## 运行开发服务器

```bash
npm run dev
```

启动开发服务器后，在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 构建生产版本

```bash
npm run build
npm start
```

## 使用说明

1. 访问主页
2. 点击 "Export Demo PSD" 按钮
3. 浏览器将自动下载一个 `demo.psd` 文件
4. 该 PSD 文件包含：
   - 800x600 像素的画布
   - 白色背景层
   - 文本层（显示 "Hello from TU-Designer!"）

## 技术栈

- **Next.js 15** - React 框架
- **React 18** - UI 库
- **TypeScript** - 类型安全
- **ag-psd** - PSD 文件生成库
