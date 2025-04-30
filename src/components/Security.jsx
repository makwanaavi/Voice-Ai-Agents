import gdpr from '../assets/logos/gdpr.svg'
import sco2 from '../assets/logos/soc2.svg'
import { useTheme } from './ThemeContext'

export default function Security() {
  const { darkMode } = useTheme()

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Enterprise-Grade Reliability
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Uptime SLA */}
          <div className={`backdrop-blur-md p-8 rounded-2xl border shadow-md transition-transform hover:scale-105 ${
            darkMode 
              ? 'bg-gray-900/80 border-gray-700' 
              : 'bg-white/80 border-gray-200'
          }`}>
            <div className="text-5xl font-bold text-purple-500 mb-3">
              99.99%
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Uptime SLA</p>
          </div>

          {/* Compliance */}
          <div className={`backdrop-blur-md p-8 rounded-2xl border shadow-md transition-transform hover:scale-105 ${
            darkMode 
              ? 'bg-gray-900/80 border-gray-700' 
              : 'bg-white/80 border-gray-200'
          }`}>
            <div className="flex justify-center items-center gap-6 mb-4">
              <img src={gdpr} alt="GDPR" className="h-12 object-contain" />
              <img src={sco2} alt="SOC 2" className="h-12 object-contain" />
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Compliance Certifications</p>
          </div>

          {/* Encryption */}
          <div className={`backdrop-blur-md p-8 rounded-2xl border shadow-md transition-transform hover:scale-105 ${
            darkMode 
              ? 'bg-gray-900/80 border-gray-700' 
              : 'bg-white/80 border-gray-200'
          }`}>
            <div className="text-5xl font-bold text-green-500 mb-3">
              256-bit
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>End-to-End Encryption</p>
          </div>
        </div>
      </div>
    </section>
  )
}