import { useTheme } from './ThemeContext';

export default function DevHub() {
  const { darkMode } = useTheme();
  const resources = [
    { title: "Quickstart Guide", icon: "🚀", link: "#" },
    { title: "Sample Repos", icon: "💻", link: "#" },
    { title: "API Reference", icon: "📚", link: "#" },
    { title: "Postman Collection", icon: "🔄", link: "#" },
  ];

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Developer Hub
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to integrate Voice AI in hours
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {resources.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              className={`p-5 rounded-lg transition-colors border hover:border-gray-600 flex flex-col items-center text-center ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 border-gray-700' 
                  : 'bg-white hover:bg-gray-50 border-gray-200'
              }`}
            >
              <span className="text-4xl mb-3">{item.icon}</span>
              <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md text-white font-medium transition-colors"
          >
            Explore Full Documentation
          </a>
        </div>
      </div>
    </section>
  );
}