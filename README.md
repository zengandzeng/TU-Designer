# TU-Designer

改图大师 - AI 智能设计评分与文件生成工具

A Next.js application for AI-powered design scoring and PSD file generation.

## Features

- 🎨 PSD file generation using ag-psd
- 💻 Built with Next.js 16, React 19, and TypeScript
- 🎯 Tailwind CSS for styling
- ⚡ Modern and responsive UI

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zengandzeng/TU-Designer.git
cd TU-Designer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
TU-Designer/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   └── PsdExportDemo.tsx # PSD export demo component
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Technologies Used

- **Next.js 16** - React framework for production
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **ag-psd** - Library for reading and writing PSD files
- **file-saver** - Library for saving files on the client-side

## Usage

The application includes a PSD Export Demo that allows you to:
1. Generate a PSD file with custom dimensions (800x600)
2. Add a white background layer
3. Add a text layer with "Hello TU-Designer"
4. Download the generated PSD file

Simply click the "Export PSD File" button to generate and download your PSD file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
