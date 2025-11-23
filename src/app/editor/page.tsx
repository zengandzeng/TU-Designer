'use client';

import { useState } from 'react';
import { Download, FileImage, Palette } from 'lucide-react';
import { writePsd } from 'ag-psd';

export default function EditorPage() {
  const [status, setStatus] = useState<string>('');

  const exportToPSD = async () => {
    try {
      setStatus('生成 PSD 文件中...');

      // Create a simple PSD document
      const psd = {
        width: 800,
        height: 600,
        children: [
          {
            name: 'Background',
            canvas: createCanvas(800, 600, '#ffffff'),
          },
          {
            name: 'Text Layer',
            text: {
              text: 'Hello TU-Designer!',
              style: {
                font: 'Arial',
                fontSize: 48,
                fillColor: { r: 0, g: 0, b: 255 },
              },
            },
            left: 100,
            top: 250,
            right: 700,
            bottom: 350,
          },
          {
            name: 'Color Rectangle',
            canvas: createCanvas(200, 200, '#ff6b6b'),
            left: 300,
            top: 200,
            right: 500,
            bottom: 400,
          },
        ],
      };

      // Write PSD
      const buffer = writePsd(psd, { generateThumbnail: true });
      
      // Create download link
      const blob = new Blob([buffer], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'tu-designer-export.psd';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setStatus('PSD 文件已成功导出！');
      
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Export error:', error);
      setStatus('导出失败，请重试。');
    }
  };

  const createCanvas = (width: number, height: number, color: string): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);
    }
    return canvas;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center space-x-3">
            <Palette className="text-blue-600" size={40} />
            <span>设计编辑器</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            创建和导出专业的 PSD 设计文件
          </p>
        </div>

        {/* Editor Canvas */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center">
            <FileImage className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold mb-2">设计画布</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              这是一个演示编辑器。点击下方按钮导出示例 PSD 文件。
            </p>
            
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg p-8 mb-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                Hello TU-Designer!
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="w-20 h-20 bg-red-400 rounded"></div>
                <div className="w-20 h-20 bg-blue-400 rounded"></div>
                <div className="w-20 h-20 bg-green-400 rounded"></div>
              </div>
            </div>

            <button
              onClick={exportToPSD}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Download size={24} />
              <span>导出为 PSD</span>
            </button>
          </div>
        </div>

        {/* Status Message */}
        {status && (
          <div className={`text-center p-4 rounded-lg ${
            status.includes('成功') 
              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
              : status.includes('失败')
              ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
          }`}>
            {status}
          </div>
        )}

        {/* Features Info */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">✨ 支持的功能</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• 图层管理</li>
              <li>• 文本编辑</li>
              <li>• 颜色填充</li>
              <li>• PSD 导出</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">🎨 技术栈</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Next.js 14</li>
              <li>• React 18</li>
              <li>• ag-psd 库</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
