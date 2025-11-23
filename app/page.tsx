'use client'

import { writePsd } from 'ag-psd'

export default function Home() {
  const exportDemoPSD = () => {
    try {
      // Create a simple PSD with two layers
      const psd = {
        width: 800,
        height: 600,
        children: [
          {
            name: 'Background',
            canvas: createColorCanvas(800, 600, { r: 100, g: 150, b: 200 }),
          },
          {
            name: 'Text Layer',
            text: {
              text: 'Hello Designer',
              transform: [1, 0, 0, 1, 300, 280],
              style: {
                font: {
                  name: 'Arial',
                  sizes: [48],
                  colors: [[255, 255, 255, 255]],
                },
              },
            },
          },
        ],
      }

      // Write PSD to ArrayBuffer
      const buffer = writePsd(psd, { generateThumbnail: true })

      // Create blob and download
      const blob = new Blob([buffer], { type: 'application/octet-stream' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'demo.psd'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      alert('PSD exported successfully!')
    } catch (error) {
      console.error('Error exporting PSD:', error)
      alert('Error exporting PSD. Check console for details.')
    }
  }

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>TU-Designer: 改图大师</h1>
        <p style={styles.subtitle}>AI 智能设计评分与文件生成工具</p>
        <button style={styles.button} onClick={exportDemoPSD}>
          Export Demo PSD
        </button>
      </div>
    </main>
  )
}

// Helper function to create a canvas with solid color
function createColorCanvas(
  width: number,
  height: number,
  color: { r: number; g: number; b: number }
): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`
    ctx.fillRect(0, 0, width, height)
  }
  return canvas
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '2rem',
    background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2rem',
    padding: '3rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
    color: '#333',
    textAlign: 'center' as const,
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#666',
    margin: 0,
    textAlign: 'center' as const,
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
}
