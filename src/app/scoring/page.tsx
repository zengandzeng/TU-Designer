'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Upload, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

export default function ScoringPage() {
  const [isAnalyzed, setIsAnalyzed] = useState(false)

  const handleUpload = () => {
    // Simulate file upload and analysis
    setTimeout(() => {
      setIsAnalyzed(true)
    }, 1500)
  }

  const scoreBreakdown = [
    { category: 'Composition', score: 90, color: 'bg-blue-500' },
    { category: 'Color Harmony', score: 82, color: 'bg-purple-500' },
    { category: 'Typography', score: 83, color: 'bg-pink-500' },
  ]

  const suggestions = [
    { text: 'Increase contrast in title for better readability', priority: 'high' },
    { text: 'Align logo to grid for more professional appearance', priority: 'medium' },
    { text: 'Reduce spacing between elements in footer', priority: 'low' },
    { text: 'Consider using a complementary color for CTA button', priority: 'medium' },
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AI Design Scoring
          </h1>
          <p className="text-lg text-gray-600">
            Upload your design and get instant AI-powered feedback
          </p>
        </div>

        {/* Upload Area */}
        {!isAnalyzed ? (
          <div className="bg-white rounded-xl shadow-lg p-12 mb-8">
            <div
              className="border-4 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer"
              onClick={handleUpload}
            >
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Drop your design here
              </h3>
              <p className="text-gray-500 mb-4">
                or click to browse files
              </p>
              <p className="text-sm text-gray-400">
                Supports PNG, JPG, SVG, PSD (Max 10MB)
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Overall Score */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold">85</div>
                    <div className="text-sm">/ 100</div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Design Score
                </h2>
                <p className="text-gray-600">
                  Your design shows great potential with room for improvement
                </p>
              </div>

              {/* Score Breakdown */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Score Breakdown
                </h3>
                {scoreBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {item.category}
                      </span>
                      <span className="text-gray-600 font-semibold">
                        {item.score}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-1000 rounded-full`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                AI Suggestions
              </h3>
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <AlertCircle
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        suggestion.priority === 'high'
                          ? 'text-red-500'
                          : suggestion.priority === 'medium'
                          ? 'text-yellow-500'
                          : 'text-blue-500'
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-gray-700">{suggestion.text}</p>
                      <span
                        className={`text-xs font-semibold mt-1 inline-block ${
                          suggestion.priority === 'high'
                            ? 'text-red-600'
                            : suggestion.priority === 'medium'
                            ? 'text-yellow-600'
                            : 'text-blue-600'
                        }`}
                      >
                        {suggestion.priority.toUpperCase()} PRIORITY
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsAnalyzed(false)}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Analyze Another Design
              </button>
              <Link
                href="/editor"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              >
                Open in Editor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
