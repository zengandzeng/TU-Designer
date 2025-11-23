# 改图大师 TU-Designer

AI 智能设计评分与文件生成工具 - AI-powered design scoring and PSD export tool

## 🚀 For Beginners: How to Get Started

This is a web application built with Next.js that helps you score and optimize your designs with AI, and export them as PSD files.

### Prerequisites

Before you start, make sure you have **Node.js** installed on your computer:
- Download Node.js from: https://nodejs.org/ (version 18 or higher)
- To check if you have Node.js installed, open your terminal and type: `node --version`

### Installation Steps

1. **Clone this repository** (or download the ZIP file and extract it)
   ```bash
   git clone https://github.com/zengandzeng/TU-Designer.git
   cd TU-Designer
   ```

2. **Install dependencies**
   
   Open your terminal in the project folder and run:
   ```bash
   npm install
   ```
   
   This will download all the necessary packages. It may take a few minutes.

3. **Start the development server**
   
   Once installation is complete, run:
   ```bash
   npm run dev
   ```

4. **Open in your browser**
   
   Open your web browser and go to: http://localhost:3000
   
   You should see the TU-Designer homepage! 🎉

### What You Can Do

- **Export Demo PSD**: Click the "Export Demo PSD" button to generate a sample PSD file with a colorful background and text layer
- **Explore Features**: See the three main features we're building:
  - 📤 Upload Design
  - 🤖 AI Scoring
  - ✨ Auto Optimize

### Other Useful Commands

- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Run linter**: `npm run lint`

### Need Help?

If you get stuck:
1. Make sure Node.js is installed correctly
2. Delete the `node_modules` folder and `.next` folder, then run `npm install` again
3. Check that you're in the correct project directory when running commands

### Technology Stack

- **Next.js 14+**: Modern React framework with App Router
- **TypeScript**: For type-safe code
- **ag-psd**: For PSD file generation and export
- **React 18**: UI library

### Project Structure

```
TU-Designer/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   └── components/       # React components
│       └── PsdExportDemo.tsx  # PSD export demo component
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

---

Happy coding! 🎨✨
