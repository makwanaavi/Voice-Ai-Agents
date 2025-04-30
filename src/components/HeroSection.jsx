import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from './ThemeContext';

export default function HeroSection() {
  const { darkMode } = useTheme();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameCount = 0;
    let animationId;

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradient for wave
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, darkMode ? 'rgba(167, 139, 250, 0.8)' : 'rgba(124, 58, 237, 0.8)');
      gradient.addColorStop(1, darkMode ? 'rgba(99, 102, 241, 0.8)' : 'rgba(79, 70, 229, 0.8)');
      ctx.fillStyle = gradient;

      for (let i = 0; i < 120; i++) {
        const amplitude = Math.sin(frameCount * 0.02 + i * 0.08) * 35;
        const size = 3 + Math.sin(frameCount * 0.05 + i * 0.2) * 2;
        ctx.beginPath();
        ctx.arc(i * 8, 50 + amplitude, size, 0, Math.PI * 2);
        ctx.fill();
      }

      frameCount++;
      animationId = requestAnimationFrame(drawWave);
    };

    drawWave();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [darkMode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const codeCardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      boxShadow: darkMode 
        ? '0 20px 25px -5px rgba(109, 40, 217, 0.3), 0 10px 10px -5px rgba(109, 40, 217, 0.1)'
        : '0 20px 25px -5px rgba(124, 58, 237, 0.3), 0 10px 10px -5px rgba(124, 58, 237, 0.1)'
    }
  };

  return (
    <section 
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      {/* Floating gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
       
        
        <motion.div 
          animate={{
            x: [0, 40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className={`absolute top-3/4 right-1/4 w-64 h-64 rounded-full blur-[80px] opacity-15 ${darkMode ? 'bg-blue-900' : 'bg-blue-200'}`}
        ></motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            className={`absolute rounded-full ${darkMode ? 'bg-purple-400' : 'bg-purple-600'}`}
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="md:w-1/2 space-y-8 mt-40"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className={`block mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Build AI Voice Agents</span>
              <motspan 
                className={`block bg-gradient-to-r ${darkMode ? 'from-purple-400 to-indigo-400' : 'from-purple-600 to-indigo-600'} bg-clip-text text-transparent`}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                That Sound Human
              </motspan>
            </h1>
          </motion.div>
          
          <motion.p variants={itemVariants} className={`text-xl max-w-lg ${darkMode ? 'text-gray-100' : 'text-black'}`}>
            Our developer platform lets you create, train and deploy natural-sounding voice AI in minutes, not weeks.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: darkMode 
                  ? '0 0 20px 5px rgba(139, 92, 246, 0.5)'
                  : '0 0 20px 5px rgba(124, 58, 237, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-xl font-medium transition-all ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white shadow-lg`}
            >
              Get Started Free
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(243, 244, 246, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-xl font-medium transition-all border ${darkMode ? 'border-gray-600 hover:bg-gray-800/80 text-white' : 'border-gray-300 hover:bg-gray-100/80 text-gray-800'}`}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className={`mt-8 flex items-center gap-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.img
                  key={i}
                  src={`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    transition: { delay: 0.8 + i * 0.1 }
                  }}
                />
              ))}
            </div>
            <span className="text-sm">Trusted by 10,000+ developers worldwide</span>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="md:w-1/2 mt-16 md:mt-0 relative"
        >
          {/* Enhanced wave animation */}
          <motion.div 
            variants={itemVariants}
            className="relative"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
           <canvas
            ref={canvasRef}
            width="600"
            height="100"
            className="w-full h-24 opacity-10 "
          />
           
          </motion.div>
          
          {/* Code card */}
          <div
            variants={codeCardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`rounded-2xl p-6 mt-8 transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className={`overflow-x-auto text-sm md:text-base ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              <code>
                <span className="text-purple-400">// Create your first voice agent</span>{'\n'}
                <span className="text-blue-400">import</span> {'{ VoiceAgent }'} <span className="text-blue-400">from</span> <span className="text-yellow-400">'voice-sdk'</span>;{'\n\n'}
                <span className="text-blue-400">const</span> agent = <span className="text-blue-400">new</span> <span className="text-green-400">VoiceAgent</span>({'{'}{'\n'}
                <span className="text-gray-500">  </span><span className="text-purple-400">personality</span>: <span className="text-yellow-400">"friendly"</span>,{'\n'}
                <span className="text-gray-500">  </span><span className="text-purple-400">languages</span>: [<span className="text-yellow-400">"en"</span>, <span className="text-yellow-400">"es"</span>],{'\n'}
                <span className="text-gray-500">  </span><span className="text-purple-400">skills</span>: [<span className="text-yellow-400">"appointments"</span>, <span className="text-yellow-400">"payments"</span>]{'\n'}
                {'}'});{'\n\n'}
                <span className="text-green-400">agent</span>.<s  pan className="text-blue-400">deploy</s>();
              </code>
            </pre>
             
          </div>

          {/* Floating microphone icon */}
          <div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute -right-10 top-1/4 p-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke={darkMode ? '#a78bfa' : '#7c3aed'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      {/* <div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [20, 0, -10]
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Scroll to explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke={darkMode ? '#a78bfa' : '#7c3aed'}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div> */}
    </section>
  );
}