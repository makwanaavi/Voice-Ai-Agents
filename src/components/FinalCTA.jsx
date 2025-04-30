import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMail, FiCheckCircle } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      setIsSubmitted(true);
      // Here you would typically call your API
      console.log("Submitted email:", email);
    }
  };

  // Reset form after 5 seconds if submitted
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section className={`relative py-28 overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get Your API Key in 2 Minutes
          </h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Start building voice agents today. No credit card required.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="relative flex-grow">
                <FiMail className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  className={`w-full pl-12 pr-6 py-4 rounded-lg ${darkMode ? 'bg-white/10 text-white placeholder-gray-400 focus:ring-purple-500' : 'bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-500'} focus:outline-none focus:ring-2 backdrop-blur-sm transition-all border ${darkMode ? 'border-white/10' : 'border-gray-200'}`}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className={`relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold transition-all ${
                  email.includes("@") 
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : darkMode 
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-gray-300 text-gray-700 cursor-not-allowed"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Start Building</span>
                <motion.span
                  animate={{
                    x: isHovered && email.includes("@") ? 4 : 0
                  }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <FiArrowRight />
                </motion.span>
                {email.includes("@") && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 hover:opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0.2 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`max-w-xl mx-auto p-6 rounded-lg border backdrop-blur-sm ${darkMode ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200'}`}
            >
              <div className="flex flex-col items-center gap-4">
                <FiCheckCircle className="text-4xl text-green-400" />
                <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Check your email!</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  We've sent your API key to <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{email}</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p 
          className={`mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Need enterprise features?{" "}
          <h6 
            href="#" 
            className={` transition-colors ${darkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-blue-600'}`}
          >
            Talk to our team
          </h6>

          <a
            href="https://github.com/makwanaavi?tab=repositories" 
            className={`underline transition-colors ${darkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-blue-600'}`}
          >
            @makwanaavi
          </a>  
        </motion.p>
      </div>
    </section>
  );
}