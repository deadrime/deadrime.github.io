"use client";

import { useTheme } from './ThemeContext';

type Theme = {
  alt: string;
  name: string;
};

const themes: Theme[] = [
  { alt: 'Light', name: 'light' },
  { alt: 'Dark', name: 'dark' },
];


type ITheme = {
  theme: 'light' | 'dark';
  changeTheme: (theme: ITheme['theme']) => void;
}


const ThemeSwitcher = () => {
  const { theme: selectedTheme, changeTheme } = useTheme();

  return (
    <section className='bg-baseThree px-5 py-4'>
      <div className=''>
        {themes.map((theme, index) => (
          <div className={`max-w-[150px] p-1 ${selectedTheme === theme.name && 'border-2 border-green-500 rounded-md'}`} key={index}>
            <label>
              <input
                type='radio'
                name='theme'
                value={theme.name}
                checked={selectedTheme === theme.name}
                onChange={() => changeTheme(theme.name as any)}
                className='hidden'
              />
              <span>{theme.name}</span>
              <div className='flex items-center justify-between mt-2'>
                <h5 className='capitalize text-sm text-baseTwo'>{theme.name} Mode</h5>
                <div className='bg-green-500 rounded-full w-[20px] flex items-center justify-center text-white text-sm'>{selectedTheme === theme.name && <span>&#10003;</span>}</div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeSwitcher;
