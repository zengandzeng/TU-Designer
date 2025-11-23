'use client'

import { useState } from 'react'
import { Download, Square, Type, Move, ZoomIn, ZoomOut, Layers } from 'lucide-react'
import { writePsd } from 'ag-psd'

export default function EditorPage() {
  const [isExporting, setIsExporting] = useState(false)

  const handleDownloadPSD = async () => {
    setIsExporting(true)

    try {
      // Create a PSD file with ag-psd
      const width = 800
      const height = 600

      // Create canvas for background layer
      const bgCanvas = document.createElement('canvas')
      bgCanvas.width = width
      bgCanvas.height = height
      const bgCtx = bgCanvas.getContext('2d')!
      bgCtx.fillStyle = '#ffffff'
      bgCtx.fillRect(0, 0, width, height)

      // Create canvas for blue rectangle layer
      const rectCanvas = document.createElement('canvas')
      rectCanvas.width = width
      rectCanvas.height = height
      const rectCtx = rectCanvas.getContext('2d')!
      rectCtx.fillStyle = '#3b82f6'
      rectCtx.fillRect(200, 150, 400, 300)

      // Create canvas for text layer
      const textCanvas = document.createElement('canvas')
      textCanvas.width = width
      textCanvas.height = height
      const textCtx = textCanvas.getContext('2d')!
      textCtx.font = 'bold 32px Arial'
      textCtx.fillStyle = '#000000'
      textCtx.textAlign = 'center'
      textCtx.textBaseline = 'middle'
      textCtx.fillText('Optimized by TU-Designer', width / 2, height / 2)

      // Create PSD structure
      const psd = {
        width,
        height,
        channels: 3,
        bitsPerChannel: 8,
        colorMode: 3, // RGB
        children: [
          {
            name: 'Background',
            canvas: bgCanvas,
            opacity: 255,
            blendMode: 'normal' as const,
          },
          {
            name: 'Blue Rectangle',
            canvas: rectCanvas,
            opacity: 255,
            blendMode: 'normal' as const,
          },
          {
            name: 'Optimized by TU-Designer',
            canvas: textCanvas,
            opacity: 255,
            blendMode: 'normal' as const,
          },
        ],
      }

      // Write PSD to ArrayBuffer
      const buffer = writePsd(psd, { generateThumbnail: true })

      // Create blob and download
      const blob = new Blob([buffer], { type: 'application/octet-stream' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'tu-designer-export.psd'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setTimeout(() => {
        setIsExporting(false)
        alert('PSD file downloaded successfully!')
      }, 1000)
    } catch (error) {
      console.error('Error generating PSD:', error)
      alert('Error generating PSD file. Please try again.')
      setIsExporting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Top Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold text-gray-800">Editor</h1>
            <span className="text-sm text-gray-500">Untitled Design</span>
          </div>
          <button
            onClick={handleDownloadPSD}
            disabled={isExporting}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <Download className="w-4 h-4 mr-2" />
            {isExporting ? 'Generating...' : 'Download PSD'}
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar - Tools */}
        <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            title="Move"
          >
            <Move className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            title="Rectangle"
          >
            <Square className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            title="Text"
          >
            <Type className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex-1" />
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl border-2 border-gray-200 aspect-[4/3] relative overflow-hidden">
              {/* Canvas Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Preview of what will be in the PSD */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 bg-blue-500 flex items-center justify-center rounded-lg shadow-lg">
                    <span className="text-white font-bold text-2xl text-center px-4">
                      Optimized by TU-Designer
                    </span>
                  </div>
                </div>
              </div>

              {/* Canvas Info Overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Canvas:</span> 800 × 600 px
                </p>
              </div>
            </div>

            {/* Canvas Description */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                <Layers className="w-5 h-5 mr-2" />
                PSD Export Preview
              </h3>
              <p className="text-sm text-blue-800 mb-2">
                When you click &quot;Download PSD&quot;, you&apos;ll get a file with:
              </p>
              <ul className="text-sm text-blue-700 space-y-1 ml-4">
                <li>• Layer 1: Solid white background</li>
                <li>• Layer 2: Blue rectangle shape</li>
                <li>• Layer 3: Text layer &quot;Optimized by TU-Designer&quot;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-64 bg-white border-l border-gray-200 p-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Properties</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">
                Width
              </label>
              <input
                type="text"
                value="800 px"
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">
                Height
              </label>
              <input
                type="text"
                value="600 px"
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">
                Color Mode
              </label>
              <input
                type="text"
                value="RGB"
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Layers</h3>
            <div className="space-y-2">
              <div className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-200">
                Text Layer
              </div>
              <div className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-200">
                Blue Rectangle
              </div>
              <div className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-200">
                Background
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
