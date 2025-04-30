import React, { createContext, useState, useContext } from 'react';

// Create a context for managing the theme
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Default is dark mode

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode); // Toggle the mode
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context in other components
export const useTheme = () => {
  return useContext(ThemeContext);
};
