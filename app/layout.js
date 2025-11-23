/**
 * Root Layout for TU-Designer (改图大师)
 * This is the top-level layout that wraps all pages in the application.
 */
export const metadata = {
  title: '改图大师 - TU-Designer',
  description: 'AI 智能设计评分与文件生成工具',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: '#f5f5f5',
      }}>
        {/* Main navigation header */}
        <header style={{
          backgroundColor: '#ffffff',
          padding: '1rem 2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
        }}>
          <nav>
            <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>
              改图大师 - TU-Designer
            </h1>
          </nav>
        </header>
        
        {/* Main content area */}
        <main>
          {children}
        </main>
        
        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '2rem',
          marginTop: '4rem',
          color: '#666',
        }}>
          <p>© 2024 改图大师 - AI 智能设计评分与文件生成工具</p>
        </footer>
      </body>
    </html>
  )
}
