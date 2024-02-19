import * as React from "react";
import type { SVGProps } from "react";
const SvgOther = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#2C2636" d="M0 0h24v24H0z" />
    <circle cx={6} cy={12} r={2} fill="#615A6C" />
    <circle cx={12} cy={12} r={2} fill="#615A6C" />
    <circle cx={18} cy={12} r={2} fill="#615A6C" />
  </svg>
);
export default SvgOther;
