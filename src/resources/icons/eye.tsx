import React from "react";

import { IconSVG, SkympIconSVGProps } from "./shared";

interface SkympEyeSVGProps extends SkympIconSVGProps {
  isOpen?: boolean;
}

export const SkympEyeIcon = (props: SkympEyeSVGProps) => (
  <IconSVG
    SVGProps={{
      ...props.SVGProps,
      viewBox: props.isOpen ? "0 0 0.17 0.2" : "0 0 3.07 3.08",
      stroke: "none"
    }}
  >
    <g className={props.className} style={props.style}>
      {props.isOpen ? (
        <>
          <path d="M0.11 0.09c0.01,0.03 -0.03,0.04 -0.04,0.03 -0.02,-0.02 0,-0.05 0.03,-0.04 -0.01,0.01 -0,0.02 0.01,0.02 0,-0 0,-0 0.01,-0zm0 -0.04c0.01,0.01 0.02,0.02 0.03,0.03 0,0 0.01,0.02 0,0.02 -0,0 -0,0 -0,-0 -0,-0 0,-0.01 -0.01,-0.02 -0.01,-0.01 -0.02,-0.02 -0.03,-0.03 -0.01,-0 -0.02,-0 -0.02,-0 -0,-0.01 0.02,-0 0.03,0zm0.04 0.06c0,-0.03 -0.02,-0.06 -0.06,-0.07 -0.04,-0 -0.06,0.02 -0.07,0.05 -0,0.04 0.02,0.06 0.05,0.07 0.04,0 0.06,-0.02 0.07,-0.06z" />
          <path d="M-0 0.04c0.01,-0 0.01,-0.01 0.02,-0.01 0.01,-0 0.01,-0.01 0.02,-0.01 0.04,-0.02 0.09,-0.01 0.12,0.02 0,0 0.01,0 0.01,0.01 -0.01,-0.01 -0.02,-0.02 -0.03,-0.03 -0.03,-0.02 -0.07,-0.02 -0.1,-0 -0.01,0 -0.01,0.01 -0.02,0.01 -0,0 -0.01,0.01 -0.02,0.02z" />
          <path d="M0 0.17c0.01,0.01 0.02,0.02 0.03,0.03 0.01,0.01 0.03,0.01 0.05,0.01 0.03,-0 0.05,-0.01 0.07,-0.03 0,-0 0,-0.01 0.01,-0.01 -0.01,0.01 -0.02,0.01 -0.03,0.02 -0.04,0.02 -0.08,0.01 -0.12,-0.01 -0,-0 -0.01,-0 -0.01,-0.01z" />
        </>
      ) : (
        <>
          <path d="M1.44 0.44c0.64,-0.06 1.15,0.43 1.2,1 0.06,0.64 -0.42,1.15 -1,1.2 -0.65,0.06 -1.15,-0.43 -1.2,-1 -0.06,-0.64 0.43,-1.15 1,-1.2zm-1.43 1.23c0.01,0.17 0.08,0.42 0.15,0.55 0.02,0.03 0.15,0.13 0.19,0.16 0.34,0.26 0.8,0.48 1.29,0.44 0.46,-0.04 0.91,-0.3 1.2,-0.56 0.09,-0.08 0.09,-0.06 0.14,-0.2 0.07,-0.18 0.1,-0.39 0.09,-0.61 -0.01,-0.11 -0.02,-0.21 -0.05,-0.31 -0.01,-0.05 -0.03,-0.09 -0.04,-0.13 -0.03,-0.08 -0.02,-0.06 -0.07,-0.1 -0.04,-0.03 -0.06,-0.06 -0.1,-0.09 -0.39,-0.31 -0.82,-0.56 -1.39,-0.53 -0.42,0.03 -0.74,0.2 -1.01,0.39 -0.05,0.04 -0.26,0.19 -0.28,0.24 -0.1,0.21 -0.14,0.5 -0.12,0.74z" />
          <path d="M1.89 1.41c0.11,0.47 -0.39,0.62 -0.62,0.39 -0.26,-0.27 0,-0.74 0.4,-0.61 -0.16,0.16 -0.01,0.3 0.11,0.28 0.07,-0.01 0.07,-0.04 0.11,-0.07zm0.01 -0.64c0.19,0.08 0.34,0.25 0.42,0.44 0.03,0.07 0.09,0.27 0.06,0.36 -0.02,0.01 -0.04,0.01 -0.06,-0 -0.03,-0.07 0.01,-0.15 -0.08,-0.35 -0.09,-0.2 -0.26,-0.34 -0.46,-0.41 -0.15,-0.05 -0.25,-0.02 -0.27,-0.06 -0.06,-0.12 0.31,-0.01 0.39,0.02zm0.56 0.84c0.04,-0.53 -0.36,-0.95 -0.83,-0.99 -0.53,-0.05 -0.95,0.36 -0.99,0.83 -0.05,0.53 0.35,0.95 0.83,1 0.53,0.05 0.96,-0.36 1,-0.84z" />
          <path d="M0.28 0.66c0.1,-0.06 0.13,-0.1 0.26,-0.17 0.1,-0.06 0.19,-0.1 0.29,-0.15 0.68,-0.27 1.3,-0.12 1.87,0.28 0.04,0.03 0.09,0.07 0.13,0.1 -0.14,-0.21 -0.27,-0.34 -0.49,-0.48 -0.47,-0.3 -1.06,-0.3 -1.55,-0.04 -0.12,0.06 -0.19,0.13 -0.29,0.2 -0.06,0.05 -0.18,0.18 -0.23,0.26z" />
          <path d="M0.34 2.5c0.09,0.14 0.34,0.33 0.5,0.41 0.21,0.11 0.48,0.17 0.75,0.16 0.47,-0.02 0.79,-0.21 1.09,-0.51 0.04,-0.04 0.06,-0.09 0.1,-0.12 -0.16,0.11 -0.31,0.22 -0.52,0.32 -0.62,0.28 -1.25,0.19 -1.8,-0.17 -0.03,-0.02 -0.09,-0.07 -0.12,-0.08z" />
        </>
      )}
    </g>
  </IconSVG>
);
