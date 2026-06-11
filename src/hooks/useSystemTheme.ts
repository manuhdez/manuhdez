import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function useSystemTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    themeQuery.addEventListener('change', themeChangeListener);

    if (!themeQuery.matches) {
      setTheme('light');
    }

    return () => {
      themeQuery.removeEventListener('change', themeChangeListener);
    };
  }, []);

  const themeChangeListener = (ev: MediaQueryListEvent) => {
    const isDarkMode = ev.matches;
    setTheme(isDarkMode ? 'dark' : 'light');
  };

  return theme;
}
