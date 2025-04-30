import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'

const quotes = [
  {
    text: 'We replaced 3 full-time agents with a voice AI bot in 2 weeks.',
    author: 'CTO, HealthTech Startup',
    role: 'CTO'
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { darkMode } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className={`mb-16 text-center text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Trusted by Developers
        </h2>

        <div className="relative h-64">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`rounded-xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                <p className={`mb-6 text-2xl italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{quote.text}"
                </p>
                <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{quote.author}</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{quote.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}