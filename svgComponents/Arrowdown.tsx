import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.227 3.97a.75.75 0 0 1 1.06 0L6 7.682 9.712 3.97a.75.75 0 0 1 1.06 1.06L6.53 9.273a.75.75 0 0 1-1.06 0L1.227 5.03a.75.75 0 0 1 0-1.06"
    />
  </svg>
);
export default SvgArrowdown;
