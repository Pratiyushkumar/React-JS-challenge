import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const newTheme = localStorage.getItem(theme);
    if (newTheme) setTheme(newTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    if (theme === 'dark-theme') setTheme('light-theme');
    else setTheme('dark-theme');
  };

  return [theme, handleThemeToggle];
};
