"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type ITheme = {
  theme: 'light' | 'dark';
  changeTheme: (theme: ITheme['theme']) => void;
}

export const ThemeContext = createContext<ITheme>({
  theme: 'light',
  changeTheme: () => { }
});


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<ITheme['theme']>('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

    const updateTheme = () => {
      const storedTheme = window?.localStorage.getItem('selectedTheme') as ITheme['theme'];
      const setTheme = (theme: ITheme['theme']) => {
        document.documentElement.setAttribute('data-theme', theme);
        setSelectedTheme(theme);
      };

      if (storedTheme !== null) {
        setTheme(storedTheme);
      } else {
        switch (true) {
          case prefersDark.matches:
            setTheme('dark');
            break;
          case prefersLight.matches:
            setTheme('light');
            break;
          default:
            break;
        }
      }
    };

    updateTheme();

    prefersDark.addEventListener('change', updateTheme);
    prefersLight.addEventListener('change', updateTheme);

    return () => {
      prefersDark.removeEventListener('change', updateTheme);
      prefersLight.removeEventListener('change', updateTheme);
    };
  }, []);

  const handleThemeChange = (themeName: ITheme['theme']) => {
    setSelectedTheme(themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('selectedTheme', themeName);
  };


  return (
    <ThemeContext.Provider value={{ theme: selectedTheme, changeTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return {
    theme,
    changeTheme
  }
}
