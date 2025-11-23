import Link from 'next/link';
import { Sparkles, FileImage, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          TU-Designer
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          改图大师
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          AI 智能设计评分与文件生成工具
        </p>
        <Link 
          href="/editor"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          <span>开始设计</span>
          <ArrowRight size={24} />
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
            <Sparkles className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI 智能评分</h3>
          <p className="text-gray-600 dark:text-gray-400">
            利用先进的 AI 技术，智能评估您的设计作品，提供专业的设计建议和改进方向。
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mb-4">
            <FileImage className="text-purple-600 dark:text-purple-400" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">PSD 文件生成</h3>
          <p className="text-gray-600 dark:text-gray-400">
            强大的 PSD 文件导出功能，支持图层、文本、效果等完整设计元素的保存和编辑。
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mb-4">
            <Zap className="text-green-600 dark:text-green-400" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">高效工作流</h3>
          <p className="text-gray-600 dark:text-gray-400">
            简化设计流程，快速生成和导出设计文件，让您的创意瞬间成真。
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-12">
        <h3 className="text-3xl font-bold mb-4">准备好开始了吗？</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          立即体验 TU-Designer 的强大功能
        </p>
        <Link 
          href="/editor"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
        >
          <span>进入编辑器</span>
          <ArrowRight size={24} />
        </Link>
      </div>
    </div>
  );
}
