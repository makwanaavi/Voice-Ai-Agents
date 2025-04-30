import { useTheme } from './ThemeContext';
import mobileAppImage from '../assets/mobile-app-screenshot.png'; // Adjust path to your image

export default function MobileSDK() {
  const { darkMode } = useTheme();

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content - Text and Code */}
          <div className="lg:w-1/2">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Voice AI in Your Mobile Apps
            </h2>
            <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Add voice capabilities to iOS/Android with just a few lines of code.
            </p>
            
            <div className={`p-6 rounded-xl max-w-md ${darkMode ? 'bg-gray-900' : 'bg-white border border-gray-200 shadow-md'}`}>
              <pre className={`text-xs md:text-sm overflow-x-auto ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                {`// Android (Kotlin)\nVoiceSDK.init("YOUR_KEY")\n\n// iOS (Swift)\nVoiceAgent.start(with: "YOUR_KEY")`}
              </pre>
            </div>
            
            <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium text-white transition-colors duration-300">
              Download Mobile SDKs
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src={mobileAppImage} 
                alt="Mobile app with voice AI integration" 
                className="w-full h-auto rounded-xl shadow-xl"
              />
              <div className={`absolute -z-10 top-4 left-4 w-full h-full rounded-xl ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}