/**
 * Landing Page for TU-Designer (改图大师)
 * This is the homepage that introduces the design tool to users.
 */
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '1rem',
        }}>
          欢迎使用改图大师 🎨
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          lineHeight: '1.6',
        }}>
          AI 智能设计评分与文件生成工具
        </p>
      </div>

      {/* Features Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{ color: '#333', marginBottom: '1rem' }}>核心功能</h2>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          fontSize: '1.1rem',
          color: '#555',
        }}>
          <li style={{ marginBottom: '1rem' }}>
            ✨ <strong>智能设计评分</strong> - AI驱动的设计质量分析
          </li>
          <li style={{ marginBottom: '1rem' }}>
            🎨 <strong>PSD文件生成</strong> - 程序化创建Photoshop文件
          </li>
          <li style={{ marginBottom: '1rem' }}>
            🚀 <strong>简单易用</strong> - 专为代码新手设计的界面
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div style={{
        textAlign: 'center',
        padding: '2rem',
      }}>
        <Link 
          href="/editor"
          style={{
            display: 'inline-block',
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
        >
          开始设计 →
        </Link>
      </div>

      {/* Getting Started Section */}
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '2rem',
        marginTop: '2rem',
      }}>
        <h3 style={{ color: '#333', marginBottom: '1rem' }}>快速开始</h3>
        <p style={{ color: '#666', lineHeight: '1.6' }}>
          点击上方的"开始设计"按钮，进入编辑器页面。
          在编辑器中，您可以尝试使用PSD导出功能，创建您的第一个设计文件！
        </p>
      </div>
    </div>
  )
}
