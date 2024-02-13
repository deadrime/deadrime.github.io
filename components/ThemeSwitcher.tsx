"use client";

import classNames from 'classnames';
import { useTheme } from './ThemeContext';
import { useSpring, useTrail, animated } from '@react-spring/web';
import { CSSProperties } from 'react';

const MoonOrSun = animated.svg;

const roundTo = (num: number, decimals = 2) => Math.round((num + Number.EPSILON) * 10 ** decimals) / 10 ** decimals

export const DarkModeToggle = ({
  theme,
  onChange,
  size = 18,
  id = 'light-switch',
  className,
  ...props
}: any) => {
  const isDark = theme === 'dark';

  function toggleColorMode(event: React.MouseEvent) {
    event.preventDefault();
    onChange(isDark ? 'light' : 'dark');
  }

  const svgSpring = useSpring({
    transform: isDark ? 'rotate(40deg)' : 'rotate(90deg)',
  });

  const maskSpring = useSpring({
    cx: isDark ? 10 : 25,
    cy: isDark ? 2 : 0,
    config: {
      mass: 3.1,
      friction: 21,
    },
  });

  const sunMoonSpring = useSpring({
    r: isDark ? 8 : 5,
  });

  const sunDotAngles = [0, 60, 120, 180, 240, 300];

  const sunDotTrail = useTrail(sunDotAngles.length, {
    transform: isDark ? 0 : 1,
    transformOrigin: 'center center',
    immediate: isDark,
    config: {
      duration: 90,
      tension: 350,
      friction: 30,
    },
  });

  return (
    <button
      className={classNames("opacity-90 relative rounded w-10 h-8 flex items-center justify-center", className)}
      onClick={toggleColorMode}
      aria-label={
        isDark ? 'Activate light mode' : 'Activate dark mode'
      }
      title={isDark ? 'Activate light mode' : 'Activate dark mode'}
      {...props}
    >
      <MoonOrSun
        className="relative overflow-visible"
        width={size}
        height={size}
        viewBox="0 0 18 18"
        style={{
          transform: svgSpring.transform
        }}
      >
        <mask id={`moon-mask-${id}`}>
          <rect x="0" y="0" width="18" height="18" fill="#FFF" />
          <animated.circle {...maskSpring} r="8" fill="black" />
        </mask>

        <animated.circle
          cx="9"
          cy="9"
          fill="rgb(var(--color-text))"
          mask={`url(#moon-mask-${id})`}
          {...sunMoonSpring}
        />

        {/* Sun dots */}
        <g>
          {sunDotTrail.map(({ transform, ...props }, index) => {
            const angle = sunDotAngles[index];
            const centerX = 9;
            const centerY = 9;

            const angleInRads = (angle / 180) * Math.PI;

            const c = 8; // hypothenuse

            const a = roundTo(centerX + c * Math.cos(angleInRads), 6)
            const b = roundTo(centerY + c * Math.sin(angleInRads), 6)

            return (
              <animated.circle
                key={angle}
                cx={a}
                cy={b}
                r={1.5}
                fill="rgb(var(--color-text))"
                style={{
                  ...props,
                  transform: transform.to(
                    (t) => `scale(${t})`
                  ),
                }}
              />
            );
          })}
        </g>
      </MoonOrSun>
    </button>
  );
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
