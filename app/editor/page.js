/**
 * Editor Page for TU-Designer (改图大师)
 * 
 * This is the main editor interface where users can interact with
 * design tools and export PSD files.
 * 
 * 这是主编辑器界面，用户可以在这里使用设计工具和导出 PSD 文件。
 */

import Link from 'next/link'
import PsdExportDemo from '@/components/PsdExportDemo'

export default function EditorPage() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
    }}>
      {/* Breadcrumb Navigation */}
      <div style={{ marginBottom: '2rem' }}>
        <Link 
          href="/"
          style={{
            color: '#0070f3',
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          ← 返回首页
        </Link>
      </div>

      {/* Page Header */}
      <div style={{
        marginBottom: '2rem',
      }}>
        <h1 style={{
          fontSize: '2rem',
          color: '#333',
          marginBottom: '0.5rem',
        }}>
          设计编辑器
        </h1>
        <p style={{
          color: '#666',
          fontSize: '1rem',
        }}>
          欢迎来到改图大师的设计编辑器！在这里您可以体验 PSD 文件生成功能。
        </p>
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: '1fr',
      }}>
        {/* PSD Export Demo Section */}
        <PsdExportDemo />

        {/* Future Features Placeholder */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ color: '#333', marginBottom: '1rem' }}>
            即将推出的功能
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            color: '#666',
            lineHeight: '1.8',
          }}>
            <li>🎯 AI 智能设计评分系统</li>
            <li>🖼️ 可视化图层编辑器</li>
            <li>🎨 智能配色建议</li>
            <li>📊 设计模板库</li>
            <li>💾 云端保存与分享</li>
          </ul>
        </div>

        {/* Help Section */}
        <div style={{
          backgroundColor: '#f0f9ff',
          borderRadius: '8px',
          padding: '1.5rem',
          border: '1px solid #bfdbfe',
        }}>
          <h3 style={{ 
            color: '#1e40af', 
            marginBottom: '0.5rem',
            fontSize: '1.1rem',
          }}>
            📖 使用提示
          </h3>
          <p style={{ color: '#1e40af', fontSize: '0.9rem', lineHeight: '1.6' }}>
            这是一个 Proof of Concept 演示版本。点击"生成并下载 PSD 文件"按钮，
            系统将创建一个包含渐变背景和文字的 PSD 文件。
            您可以使用 Adobe Photoshop 或其他支持 PSD 格式的软件打开生成的文件。
          </p>
        </div>
      </div>
    </div>
  )
}
