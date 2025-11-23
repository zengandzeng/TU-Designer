'use client';

import { writePsd, Psd } from 'ag-psd';

export default function PsdExportDemo() {
  const handleExport = () => {
    try {
      // Create a simple PSD document structure
      const psd = {
        width: 800,
        height: 600,
        channels: 3,
        bitsPerChannel: 8,
        colorMode: 3, // RGB mode
        children: [
          // Background layer with colorful gradient
          {
            name: 'Colorful Background',
            canvas: createColorfulBackground(800, 600),
          },
          // Text layer with proper transform array format
          {
            name: 'Score Text',
            text: {
              text: 'Design Score: A+',
              style: {
                fontSize: 48,
                fillColor: { r: 255, g: 255, b: 255 },
              },
              // Transform as 6-element array [xx, xy, yx, yy, tx, ty]
              transform: [1, 0, 0, 1, 250, 300],
            },
          },
        ],
      };

      // Write PSD to ArrayBuffer
      const buffer = writePsd(psd as Psd, { generateThumbnail: true });

      // Create a blob and trigger download
      const blob = new Blob([buffer], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'tu-designer-demo.psd';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert('PSD file exported successfully! 🎉');
    } catch (error) {
      console.error('Error exporting PSD:', error);
      alert('Failed to export PSD. Check console for details.');
    }
  };

  return (
    <div className="psd-export-demo">
      <button
        onClick={handleExport}
        className="export-button"
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
      >
        🎨 Export Demo PSD
      </button>
    </div>
  );
}

// Helper function to create a colorful background
function createColorfulBackground(width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Create a vibrant gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(0.5, '#764ba2');
    gradient.addColorStop(1, '#f093fb');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  return canvas;
}
