'use client';

import { writePsd } from 'ag-psd';

export default function Home() {
  const exportDemoPsd = () => {
    try {
      // Create PSD object with dimensions 800x600
      const psd = {
        width: 800,
        height: 600,
        children: [
          // White background layer
          {
            name: 'Background',
            canvas: createWhiteCanvas(800, 600),
          },
          // Text layer
          {
            name: 'Text Layer',
            text: {
              text: 'Hello from TU-Designer!',
              style: {
                fontSize: 36,
                fillColor: { r: 0, g: 0, b: 0 },
              },
              transform: {
                xx: 1, xy: 0, yx: 0, yy: 1, tx: 100, ty: 300,
              },
            },
          },
        ],
      };

      // Convert PSD object to ArrayBuffer
      const buffer = writePsd(psd, { generateThumbnail: false });

      // Create a Blob from the buffer
      const blob = new Blob([buffer], { type: 'application/octet-stream' });

      // Create download link and trigger download
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'demo.psd';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert('PSD file downloaded successfully!');
    } catch (error) {
      console.error('Error generating PSD:', error);
      alert('Failed to generate PSD. Check console for details.');
    }
  };

  // Helper function to create a white canvas
  const createWhiteCanvas = (width: number, height: number): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, width, height);
    }
    return canvas;
  };

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center',
    }}>
      <h1 style={{ 
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#333',
      }}>
        改图大师 (TU-Designer)
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '2rem',
        lineHeight: '1.6',
      }}>
        AI 智能设计评分与文件生成工具。这是一个演示应用，展示如何使用 ag-psd 库
        在浏览器中生成 PSD 文件。点击下面的按钮下载一个包含白色背景和文本图层的示例 PSD 文件。
      </p>
      
      <button
        onClick={exportDemoPsd}
        style={{
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0051cc'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
      >
        Export Demo PSD
      </button>
    </div>
  );
}
