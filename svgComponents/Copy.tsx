import * as React from "react";
import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20px"
    height="20px"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    aria-hidden="true"
    className="copy_svg__with-icon_icon__MHUeb"
    data-testid="geist-icon"
    shapeRendering="geometricPrecision"
    style={{
      color: "currentcolor",
      width: 20,
      height: 20,
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 17a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.732 1M11 21h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2" />
  </svg>
);
export default SvgCopy;
