import * as React from "react";
import type { SVGProps } from "react";
const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="currentColor"
    viewBox="2 2 20 20"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M7.005 9c0-.55.445-1 .995-1h8c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1zM12 12.5 8 10v5h8v-5zm0-1L8 9h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEmail;
