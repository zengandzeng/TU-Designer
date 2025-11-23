import PsdExportDemo from '@/components/PsdExportDemo';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)' }}>
      {/* Header */}
      <header style={{
        background: 'white',
        padding: '20px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
          }}>
            改图大师 TU-Designer
          </h1>
          <p style={{ margin: '8px 0 0 0', color: '#6c757d' }}>
            AI 智能设计评分与文件生成工具
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#212529',
          marginBottom: '20px',
        }}>
          Transform Your Designs with AI
        </h2>
        <p style={{
          fontSize: '20px',
          color: '#6c757d',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px auto',
        }}>
          Upload your design, get instant AI-powered scoring, and export optimized PSD files with one click.
        </p>

        {/* Demo Export Button */}
        <div style={{ marginBottom: '60px' }}>
          <PsdExportDemo />
        </div>
      </section>

      {/* Features Grid */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
        }}>
          {/* Upload Design Feature */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px',
            }}>
              📤
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#212529',
              marginBottom: '12px',
            }}>
              Upload Design
            </h3>
            <p style={{
              color: '#6c757d',
              lineHeight: '1.6',
            }}>
              Drag and drop your design files or browse to upload. Supports PSD, PNG, JPG, and more formats.
            </p>
            <div style={{
              marginTop: '20px',
              padding: '12px',
              background: '#f8f9fa',
              borderRadius: '8px',
              color: '#6c757d',
              fontSize: '14px',
            }}>
              Coming soon: Batch upload support
            </div>
          </div>

          {/* AI Scoring Feature */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px',
            }}>
              🤖
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#212529',
              marginBottom: '12px',
            }}>
              AI Scoring
            </h3>
            <p style={{
              color: '#6c757d',
              lineHeight: '1.6',
            }}>
              Get instant feedback on your design with AI-powered analysis. Scores based on composition, color theory, and more.
            </p>
            <div style={{
              marginTop: '20px',
              padding: '12px',
              background: '#f8f9fa',
              borderRadius: '8px',
              color: '#6c757d',
              fontSize: '14px',
            }}>
              Coming soon: Detailed scoring breakdown
            </div>
          </div>

          {/* Auto Optimize Feature */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px',
            }}>
              ✨
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#212529',
              marginBottom: '12px',
            }}>
              Auto Optimize
            </h3>
            <p style={{
              color: '#6c757d',
              lineHeight: '1.6',
            }}>
              Automatically enhance your design with AI suggestions. Export optimized versions in multiple formats including PSD.
            </p>
            <div style={{
              marginTop: '20px',
              padding: '12px',
              background: '#f8f9fa',
              borderRadius: '8px',
              color: '#6c757d',
              fontSize: '14px',
            }}>
              Coming soon: One-click optimization
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center',
        color: '#6c757d',
      }}>
        <p>
          Built with Next.js 14+ and ag-psd | © 2024 TU-Designer
        </p>
      </footer>
    </main>
  );
}
