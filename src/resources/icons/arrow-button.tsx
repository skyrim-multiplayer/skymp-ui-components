import React from "react";

import { IconSVG } from "./shared";

export const SkympArrowButtonIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <IconSVG
        {...props}
        viewBox="0 0 0.72 0.88"
    >
      <g
        stroke="none"
        fill="currentColor"
      >
        <path
          d={
            "M-0 0.88l0.08 -0 0.08 -0.08 0.13 0.08 0.43 -0.44 -0.42 -0.44 -0.08 0 -0.06 0.09 -0.11 -0.09 -0.04 0 0 0.64 0 0.24zm0.23 -0.12l-0.19 -0.18 -0.01 -0.26 0.21 -0.19 0.33 0.32 -0.35 0.32z"
          }
        />
        <polygon
          points={
            "0.22,0.54 0.22,0.59 0.26,0.59 0.39,0.44 0.26,0.29 0.22,0.29 0.22,0.34 0.18,0.34 0.18,0.53 0.18,0.55"
          }
        />
      </g>
    </IconSVG>
  );
};
