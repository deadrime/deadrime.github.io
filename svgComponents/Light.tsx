import * as React from "react";
import type { SVGProps } from "react";
const SvgLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20px"
    height="20px"
    className="light_svg__sc-a794b73f-1 light_svg__upJhz"
    style={{
      transform: "rotate(40deg)",
    }}
    viewBox="0 0 18 18"
    {...props}
  >
    <mask id="light_svg__a">
      <path fill="#FFF" d="M0 0h18v18H0z" />
      <circle cx={10} cy={2} r={8} />
    </mask>
    <circle
      cx={9}
      cy={9}
      r={8}
      fill="rgb(var(--color-text))"
      mask="url(#light_svg__a)"
    />
    <g fill="rgb(var(--color-text))">
      <circle
        cx={17}
        cy={9}
        r={1.5}
        style={{
          transformOrigin: "center center",
          transform: "scale(0)",
        }}
      />
      <circle
        cx={13}
        cy={15.928}
        r={1.5}
        style={{
          transformOrigin: "center center",
          transform: "scale(0)",
        }}
      />
      <circle
        cx={5}
        cy={15.928}
        r={1.5}
        style={{
          transformOrigin: "center center",
          transform: "scale(0)",
        }}
      />
      <circle
        cx={1}
        cy={9}
        r={1.5}
        style={{
          transformOrigin: "center center",
          transform: "scale(0)",
        }}
      />
      <circle
        cx={5}
        cy={2.072}
        r={1.5}
        style={{
          transformOrigin: "center center",
          transform: "scale(0)",
        }}
      />
      <circle
        cx={13}
        cy={2.072}
        r={1.5}
        style={{
          transformOrigin: "center center",
          transform: "scale(0)",
        }}
      />
    </g>
  </svg>
);
export default SvgLight;
