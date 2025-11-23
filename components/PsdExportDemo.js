'use client'

/**
 * PSD Export Demo Component
 * 
 * This component demonstrates how to use ag-psd library to create
 * a layered Photoshop (PSD) file programmatically and download it.
 * 
 * 这个组件演示如何使用 ag-psd 库程序化创建分层的 Photoshop (PSD) 文件并下载。
 */

import { useState } from 'react'

export default function PsdExportDemo() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [status, setStatus] = useState('')

  /**
   * Generate and download a PSD file
   * This creates a simple PSD with:
   * - A background layer with a gradient
   * - A text layer with sample text
   */
  const handleGeneratePsd = async () => {
    setIsGenerating(true)
    setStatus('正在生成PSD文件...')

    try {
      // Dynamically import ag-psd to avoid SSR issues
      const { writePsd } = await import('ag-psd')

      // Define the canvas size
      const width = 800
      const height = 600

      // Create a canvas for the background layer
      const bgCanvas = document.createElement('canvas')
      bgCanvas.width = width
      bgCanvas.height = height
      const bgCtx = bgCanvas.getContext('2d')

      // Draw a gradient background
      const gradient = bgCtx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#667eea')
      gradient.addColorStop(1, '#764ba2')
      bgCtx.fillStyle = gradient
      bgCtx.fillRect(0, 0, width, height)

      // Create a canvas for the text layer
      const textCanvas = document.createElement('canvas')
      textCanvas.width = width
      textCanvas.height = height
      const textCtx = textCanvas.getContext('2d')

      // Draw text
      textCtx.fillStyle = '#ffffff'
      textCtx.font = 'bold 48px Arial'
      textCtx.textAlign = 'center'
      textCtx.textBaseline = 'middle'
      textCtx.fillText('改图大师', width / 2, height / 2 - 30)
      
      textCtx.font = '24px Arial'
      textCtx.fillText('TU-Designer', width / 2, height / 2 + 30)

      // Create PSD structure
      // PSD 结构定义
      const psd = {
        width: width,
        height: height,
        channels: 3, // RGB
        bitsPerChannel: 8,
        colorMode: 3, // RGB mode
        children: [
          {
            name: '背景层 (Background)',
            canvas: bgCanvas,
            // Layer is visible by default
          },
          {
            name: '文字层 (Text)',
            canvas: textCanvas,
            // Layer is visible by default
          },
        ],
      }

      setStatus('正在写入PSD数据...')

      // Convert PSD structure to ArrayBuffer
      const buffer = writePsd(psd)

      setStatus('正在准备下载...')

      // Create a Blob and trigger download
      const blob = new Blob([buffer], { type: 'application/octet-stream' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'tu-designer-demo.psd'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setStatus('✅ PSD文件已生成并下载！')
      
    } catch (error) {
      console.error('Error generating PSD:', error)
      setStatus(`❌ 生成失败: ${error.message}`)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ color: '#333', marginBottom: '1rem' }}>
        PSD 导出演示
      </h2>
      
      <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>
        点击下方按钮，体验程序化生成 PSD 文件的功能。
        生成的文件包含两个图层：一个渐变背景层和一个文字层。
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <button
          onClick={handleGeneratePsd}
          disabled={isGenerating}
          style={{
            backgroundColor: isGenerating ? '#ccc' : '#0070f3',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: isGenerating ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          {isGenerating ? '生成中...' : '生成并下载 PSD 文件'}
        </button>
      </div>

      {status && (
        <div style={{
          padding: '1rem',
          backgroundColor: '#f0f9ff',
          borderLeft: '4px solid #0070f3',
          borderRadius: '4px',
          color: '#333',
        }}>
          {status}
        </div>
      )}

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '6px',
      }}>
        <h3 style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem' }}>
          💡 技术说明
        </h3>
        <ul style={{ 
          fontSize: '0.9rem', 
          color: '#666', 
          lineHeight: '1.6',
          paddingLeft: '1.5rem',
        }}>
          <li>使用 <code>ag-psd</code> 库创建 PSD 文件</li>
          <li>通过 Canvas API 绘制图层内容</li>
          <li>生成的文件可在 Photoshop 中打开编辑</li>
          <li>支持多图层、透明度等高级特性</li>
        </ul>
      </div>
    </div>
  )
}
