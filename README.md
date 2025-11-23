# TU-Designer: 改图大师

AI 智能设计评分与文件生成工具

## 项目简介

TU-Designer 是一个基于 Next.js 的 Web 应用，旨在提供智能设计评分和文件生成功能。该项目利用现代 Web 技术栈，为设计师提供高效的工具来生成和管理设计文件。

## 功能特性

- 🎨 PSD 文件生成：使用 ag-psd 库生成 Photoshop 文件
- 🖼️ 多层支持：支持创建包含背景和文本层的复杂设计
- 💻 现代化界面：基于 Next.js 14 和 React 18 构建
- 📱 响应式设计：适配各种屏幕尺寸

## 技术栈

- **框架**: Next.js 14 (App Router)
- **前端**: React 18, TypeScript
- **PSD 处理**: ag-psd
- **样式**: CSS-in-JS

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm start
```

## 使用说明

1. 访问主页
2. 点击 "Export Demo PSD" 按钮
3. 系统将自动生成一个包含背景层和文本层的演示 PSD 文件
4. 文件会自动下载到本地

## 项目结构

```
TU-Designer/
├── app/
│   ├── layout.tsx    # 根布局
│   └── page.tsx      # 主页面
├── package.json      # 项目配置
├── tsconfig.json     # TypeScript 配置
└── next.config.js    # Next.js 配置
```

## 开发计划

- [x] 基础项目搭建
- [x] PSD 文件生成演示
- [ ] AI 智能设计评分
- [ ] 高级文件生成功能
- [ ] 用户界面优化

## 许可证

MIT
