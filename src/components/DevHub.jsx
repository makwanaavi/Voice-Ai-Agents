import { useTheme } from './ThemeContext';
import { FiZap, FiCode, FiBookOpen, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function DevHub() {
  const { darkMode } = useTheme();
  
  const resources = [
    { 
      title: "Quickstart Guide", 
      icon: <FiZap className="text-3xl" />,
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "Sample Repos", 
      icon: <FiCode className="text-3xl" />,
      link: "#",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "API Reference", 
      icon: <FiBookOpen className="text-3xl" />,
      link: "#",
      color: "from-green-500 to-teal-500"
    },
    { 
      title: "Postman Collection", 
      icon: <FiDownload className="text-3xl" />,
      link: "#",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className={`relative py-20 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className={`absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl ${darkMode ? 'bg-purple-900' : 'bg-purple-200'}`}></div>
        <div className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl ${darkMode ? 'bg-blue-900' : 'bg-blue-200'}`}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500`}>
            Developer Hub
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to integrate Voice AI in hours
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-xl p-0.5 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-50'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className={`h-full rounded-[15px] p-6 relative z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${item.color} text-white`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Get started with our comprehensive {item.title.toLowerCase()}</p>
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl text-white font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Explore Full Documentation
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}