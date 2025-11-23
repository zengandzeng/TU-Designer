import Link from 'next/link'
import { Sparkles, Target, FileDown } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Target,
      title: 'AI Scoring',
      description: 'Get instant feedback on your design with our AI-powered scoring system',
    },
    {
      icon: Sparkles,
      title: 'Smart Suggestions',
      description: 'Receive intelligent recommendations to improve your design quality',
    },
    {
      icon: FileDown,
      title: 'PSD/Vector Export',
      description: 'Export your optimized designs as PSD files with proper layers',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            改图大师 (TU-Designer)
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-Powered Design Assistant
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Transform your designs with intelligent scoring, smart suggestions, and seamless PSD export capabilities
          </p>
          <Link
            href="/scoring"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started
            <Sparkles className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Designs?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Start using TU-Designer today and experience AI-powered design optimization
          </p>
          <Link
            href="/scoring"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Try AI Scoring Now
          </Link>
        </div>
      </section>
    </main>
  )
}
