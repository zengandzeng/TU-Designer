'use client';

import { writePsd } from 'ag-psd';
import { saveAs } from 'file-saver';

export default function PsdExportDemo() {
  const handleExport = () => {
    try {
      // Create a PSD document with specified dimensions
      const psd = {
        width: 800,
        height: 600,
        children: [
          // White background layer
          {
            name: 'Background',
            canvas: createCanvas(800, 600, 'white'),
          },
          // Text layer
          {
            name: 'Hello TU-Designer',
            text: {
              text: 'Hello TU-Designer',
              transform: [1, 0, 0, 1, 100, 300], // Position at x:100, y:300
              style: {
                font: {
                  name: 'Arial',
                  sizes: [48],
                  colors: [[0, 0, 0, 1]], // Black color
                },
              },
            },
          },
        ],
      };

      // Write the PSD to a buffer
      const buffer = writePsd(psd, { generateThumbnail: false });

      // Convert ArrayBuffer to Blob
      const blob = new Blob([buffer], { type: 'application/octet-stream' });

      // Trigger download
      saveAs(blob, 'tu-designer-demo.psd');

      console.log('PSD file generated successfully!');
    } catch (error) {
      console.error('Error generating PSD:', error);
      alert('Failed to generate PSD file. Please check the console for details.');
    }
  };

  // Helper function to create a canvas with solid color
  const createCanvas = (width: number, height: number, color: string): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);
    }
    return canvas;
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 border border-gray-200 rounded-lg bg-white dark:bg-zinc-900 dark:border-zinc-700">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        PSD Export Demo
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
        Click the button below to generate and download a sample PSD file with a white background and text layer.
      </p>
      <button
        onClick={handleExport}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Export PSD File
      </button>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <p>Generated PSD will contain:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Dimensions: 800x600 pixels</li>
          <li>White background layer</li>
          <li>Text layer: &quot;Hello TU-Designer&quot;</li>
        </ul>
      </div>
    </div>
  );
}
