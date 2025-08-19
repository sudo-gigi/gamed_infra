import React, { createContext, useState, useContext } from 'react';

// Create the context object
const ThemeContext = createContext();

// Create a Theme Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#61D484',
    secondaryColor: '#9D80CC',
  });

  // Function to update the theme
  const updateTheme = (newTheme) => {
    setTheme({ ...theme, ...newTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily use the theme context
export const useTheme = () => useContext(ThemeContext);