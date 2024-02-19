import * as React from "react";
import type { SVGProps } from "react";
const SvgHuman = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#FAFAFA" d="M0 0h24v24H0z" />
    <path
      fill="#212326"
      d="M16.44 7.56h3.47v8.88h-3.47zm-12.35 0h3.47v8.88H4.09z"
    />
    <g clipPath="url(#human_svg__a)">
      <path
        fill="#212326"
        d="m-1 7.838 6.808.238-.112 3.214q3.114-.927 7.436-.776 4.44.155 7.54 1.383 3.158 1.229 3.103 2.794l-.133 3.8-6.808-.238.026-.754q.078-.557.09-.864a6 6 0 0 0-.033-.77 2.2 2.2 0 0 0-.266-.877 3.8 3.8 0 0 0-.566-.762q-1.141-1.256-3.6-2.14c-1.64-.598-3.99-.742-5.138-.707-.989.04-.708.046-1.072.295q-.546.359-.63 1.083l-.179 5.1-6.808-.238z"
      />
    </g>
    <defs>
      <clipPath id="human_svg__a">
        <path fill="#fff" d="M6.588 10.07h11.275v6.072H6.588z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHuman;
