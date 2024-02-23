import * as React from "react";
import type { SVGProps } from "react";
const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="currentColor"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#email_svg__a)">
      <path
        fillRule="evenodd"
        d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16M8.533 9.28h14.934c.821 0 1.493.672 1.493 1.493v10.454c0 .821-.672 1.493-1.493 1.493H8.533a1.5 1.5 0 0 1-1.493-1.493V10.773c0-.821.672-1.493 1.493-1.493m7.99 7.765 6.048-4.778c.224-.15.298-.523.149-.747-.15-.224-.523-.299-.821-.15L16 15.254l-5.824-3.882c-.299-.15-.597-.075-.821.149-.224.299-.15.672.074.821l5.974 4.704c.373.224.821.224 1.12 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="email_svg__a">
        <rect width={32} height={32} fill="#fff" rx={16} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEmail;
