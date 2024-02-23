import * as React from "react";
import type { SVGProps } from "react";
const SvgHabr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="currentColor"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#habr_svg__a)">
      <g clipPath="url(#habr_svg__b)">
        <path d="M0 0v32h32V0zm9.365 5.333h2.177c1.63 0 2.188.036 2.224.151.026.089.042 1.823.042 3.865l-.01 3.708.63-.563c.88-.776 1.62-1.047 3.021-1.099.922-.026 1.297.01 1.943.24 1.417.474 2.417 1.448 2.938 2.885.203.563.229 1.151.266 5.714l.042 5.099h-4.453v-4.161c0-4.099-.01-4.151-.286-4.651-.391-.661-.813-.964-1.479-1.036-1.135-.125-1.922.26-2.37 1.188-.214.427-.24.875-.25 4.474-.016 2.198-.042 4.042-.042 4.089-.01.063-1 .099-2.203.099H9.373v-10z" />
      </g>
    </g>
    <defs>
      <clipPath id="habr_svg__a">
        <rect width={32} height={32} fill="#fff" rx={16} />
      </clipPath>
      <clipPath id="habr_svg__b">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHabr;
