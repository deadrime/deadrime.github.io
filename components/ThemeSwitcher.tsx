"use client";

import classNames from 'classnames';
import { useTheme } from './ThemeContext';
// import { useSpring, useTrail, animated } from '@react-spring/web';
import { CSSProperties, useCallback } from 'react';

// const MoonOrSun = animated.svg;

const roundTo = (num: number, decimals = 2) => Math.round((num + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;

export const DarkModeToggle = ({
  theme,
  onChange,
  size = 18,
  id = 'light-switch',
  className,
  ...props
}: any) => {
  return <div>TODO</div>
};

type ThemeSwitcher = {
  className?: string;
  style?: CSSProperties;
}

const ThemeSwitcher: React.FC<ThemeSwitcher> = (props) => {
  const { theme: selectedTheme, changeTheme } = useTheme();

  return (
    <DarkModeToggle theme={selectedTheme} onChange={changeTheme} {...props} />
  );
};

export default ThemeSwitcher;
