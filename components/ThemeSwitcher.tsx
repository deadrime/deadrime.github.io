"use client";

import { useTheme } from './ThemeContext';
import { CSSProperties, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react'

export const DarkModeToggle = ({
  onChange,
  size = 18,
  id = 'light-switch',
  className,
  ...props
}: any) => {
 const { theme, changeTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const sunParticleCount = 8
  const sunR = 12.5
  const sunSizePx = `${sunR}px`

  const Cx = 32 / 2
  const Cy = 0
  const r = 2.5

  const sunX = Cx - sunR / 2
  const sunY = Cy - sunR / 2

  const calculateSunPartXy = (i: number, distance = 20) => {
    const angle = (2 * Math.PI * i) / sunParticleCount
    const x = Cx + (distance + r) * Math.cos(angle) - r / 2
    const y = Cy + (distance + r) * Math.sin(angle) - r / 2
    return { x, y }
  }

  const getSunPartStyle = (i: number) => {
    const width = r
    const height = r

    if (theme === 'dark') {
      const { x, y } = calculateSunPartXy(i, 0)
      return {
        width,
        height,
        scale: 1.15,
        opacity: [1, 0],
        x,
        y,
      }
    }

    if (isPressed) {
      return {
        ...calculateSunPartXy(i, 4),
        width,
        height,
        scale: 0.75,
      }
    }

    if (isHovered) {
      return {
        ...calculateSunPartXy(i, 7.5),
        width,
        height,
        scale: 1,
      }
    }

    const { x: x1, y: y1 } = calculateSunPartXy(i, 0)
    const { x: x2, y: y2 } = calculateSunPartXy(i, 8)
    return {
      width,
      height,
      x: [x1, x2],
      y: [y1, y2],
    }
  }

  return (
    <motion.button
      className="w-[32px] h-[32px] relative overflow-hidden cursor-pointer"
      aria-label="Toggle theme"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onClick={() => {
        changeTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      {Array.from({ length: sunParticleCount }, (_, i) => (
        <motion.div
          key={i}
          animate={getSunPartStyle(i)}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute bg-black rounded-full"
        />
      ))}

      <motion.div
        className="absolute rounded-full bg-black dark:bg-red"
        style={{
          width: sunSizePx,
          height: sunSizePx,
          x: sunX,
          y: sunY,
        }}
        animate={{
          scale: isPressed ? 0.75 : isHovered ? 1.1 : 1,
          background: theme === 'dark' ? '#fff' : 'var(--color-black)',
        }}
        transition={{ duration: 0.5 }}
      />

      <AnimatePresence>
        {theme === 'dark' && (
          <motion.div
            className="absolute rounded-full bg-white"
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
      </AnimatePresence>
    </motion.button>
  )
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
