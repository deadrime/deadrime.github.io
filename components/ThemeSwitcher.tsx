"use client";

import { useTheme } from './ThemeContext';
import IconLight from '@/icons/light.svg';

const ThemeSwitcher = () => {
  const { theme: selectedTheme, changeTheme } = useTheme();

  return (
    <section className='px-5 py-4'>
      <div className=''>
        <button onClick={() => {
          if (selectedTheme === 'dark') {
            changeTheme('light')
          } else {
            changeTheme('dark')
          }
        }}>
          <IconLight width={32} />
        </button>
      </div>
    </section>
  );
};

export default ThemeSwitcher;
