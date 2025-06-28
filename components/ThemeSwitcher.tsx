"use client";

import { Theme, useTheme } from './ThemeContext';
import { CSSProperties, useState } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'motion/react';
import classNames from 'classnames';

type DarkModeToggleProps = HTMLMotionProps<'button'> & {
  theme: Theme;
  onThemeChange: (theme: Theme) => void
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ theme, onThemeChange, className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const sunParticleCount = 8;
  const sunR = 12.5;
  const sunSizePx = `${sunR}px`;

  const Cx = 32 / 2;
  const Cy = 0;
  const r = 2.5;

  const sunX = Cx - sunR / 2;
  const sunY = Cy - sunR / 2;

  const calculateSunPartXy = (i: number, distance = 20) => {
    const angle = (2 * Math.PI * i) / sunParticleCount;
    const x = Cx + (distance + r) * Math.cos(angle) - r / 2;
    const y = Cy + (distance + r) * Math.sin(angle) - r / 2;
    return { x, y };
  };

  const getSunPartStyle = (i: number) => {
    const width = r;
    const height = r;

    if (theme === 'dark') {
      const { x, y } = calculateSunPartXy(i, 0);
      return {
        width,
        height,
        scale: 1.15,
        opacity: [1, 0],
        x,
        y,
      };
    }

    if (isPressed) {
      return {
        ...calculateSunPartXy(i, 4),
        width,
        height,
        opacity: 1,
        scale: 0.75,
      };
    }

    const { x: x1, y: y1 } = calculateSunPartXy(i, 0);
    const { x: x2, y: y2 } = calculateSunPartXy(i, 7);

    return {
      width,
      height,
      opacity: 1,
      x: [x1, x2],
      y: [y1, y2],
    };
  };

  return (
    <motion.button
      className={classNames("w-[32px] h-[32px] relative overflow-hidden cursor-pointer", className)}
      aria-label="Toggle theme"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onClick={() => {
        onThemeChange(theme === 'light' ? 'dark' : 'light');
      }}
      {...props}
    >
      {/* Солнечные лучи */}
      {Array.from({ length: sunParticleCount }, (_, i) => (
        <motion.div
          key={i + theme}
          initial={{
            ...getSunPartStyle(0),
            opacity: 0
          }}
          animate={getSunPartStyle(i)}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute bg-black rounded-full"
        />
      ))}

      {/* Солнце */}
      <motion.div
        className="absolute rounded-full bg-black dark:bg-red"
        style={{
          width: sunSizePx,
          height: sunSizePx,
          x: sunX,
          y: sunY,
        }}
        initial={{
          scale: 1,
        }}
        animate={{
          scale: isPressed ? 0.75 : isHovered ? 1.1 : 1,
          background: theme === 'dark' ? '#fff' : 'var(--color-black)',
        }}
        transition={{ duration: 0.35 }}
      />

      {theme === 'dark' && (
        <motion.div
          className="absolute rounded-full bg-white"
          key="moon"
          style={{
            width: sunSizePx,
            height: sunSizePx,
            y: sunY,
            background: 'var(--color-background)',
          }}
          initial={{ x: 50, y: -5 }}
          animate={{
            x: sunX / 2 + sunX,
            y: sunY - 2,
          }}
          exit={{
            x: sunX,
            y: sunY,
            scale: [1, 0],
            background: 'var(--color-black)',
          }}
          transition={{ duration: 0.2, ease: 'linear' }}
        />
      )}
    </motion.button>
  );
};

type ThemeSwitcher = {
  className?: string;
  style?: CSSProperties;
}

const ThemeSwitcher: React.FC<ThemeSwitcher> = (props) => {
  const { theme: selectedTheme, changeTheme } = useTheme();

  return (
    <DarkModeToggle theme={selectedTheme} onThemeChange={changeTheme} {...props} />
  );
};

export default ThemeSwitcher;
