import { useState, useEffect } from "react";

const lightTheme = {
    background: '#f2f2f2',
    color: '#333',
  };
  
  const darkTheme = {
    background: '#232436',
    color: '#f2f2f2',
  };

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    const root = document.documentElement;
    root.style.setProperty('--bg-color', isDarkMode ? darkTheme.background : lightTheme.background);
    root.style.setProperty('--text-color', isDarkMode ? darkTheme.color : lightTheme.color);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;