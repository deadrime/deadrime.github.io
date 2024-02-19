import * as React from "react";
import type { SVGProps } from "react";
const SvgItcanfly = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" d="M0 0h24v24H0z" />
    <path
      fill="#FC4600"
      fillRule="evenodd"
      d="M20.375 12.122a5.51 5.51 0 0 1-9.724 3.552H8.57a7.224 7.224 0 1 0 0-7.102h2.08a5.51 5.51 0 0 1 9.724 3.551"
      clipRule="evenodd"
    />
    <path
      fill="#FC4600"
      fillRule="evenodd"
      d="M18.76 9.551a5.5 5.5 0 0 1 .623 2.204H4.163L1.96 9.551zm.623 2.939a5.5 5.5 0 0 1-.623 2.204H7.102L4.898 12.49z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgItcanfly;
