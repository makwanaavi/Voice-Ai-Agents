import React from 'react';
import { useTheme } from './ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggleButton = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 right-6 z-50"
    >
      <button
        onClick={toggleTheme}
        className={`
          p-3 rounded-full shadow-lg
          ${darkMode 
            ? 'bg-gray-800 hover:bg-gray-700 text-purple-400' 
            : 'bg-white hover:bg-gray-100 text-purple-600'
          }
          transition-all duration-300
          border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
          focus:outline-none focus:ring-2 focus:ring-purple-500
        `}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <motion.div
          animate={{ rotate: darkMode ? 0 : 360 }}
          transition={{ duration: 0.5 }}
        >
          {darkMode ? (
            <FaMoon className="w-5 h-5" />
          ) : (
            <FaSun className="w-5 h-5" />
          )}
        </motion.div>
      </button>
    </motion.div>
  );
};

export default ThemeToggleButton;