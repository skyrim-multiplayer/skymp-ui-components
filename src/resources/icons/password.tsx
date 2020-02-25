import React from "react";

import { IconSVG, SkympIconSVGProps } from "./shared";

export const SkympPasswordIcon = (props: SkympIconSVGProps) => (
  <IconSVG
    SVGProps={{ ...props.SVGProps, viewBox: "0 0 1.73 0.79", stroke: "none" }}
  >
    <g className={props.className} style={props.style}>
      <polygon points="-0,0 0.51,0 0.51,0.35 -0,0.35 " />
      <polygon points="0.61,0 1.12,0 1.12,0.35 0.61,0.35 " />
      <polygon points="1.23,0 1.73,0 1.73,0.35 1.23,0.35 " />
      <polygon points="-0,0.44 0.51,0.44 0.51,0.79 -0,0.79 " />
      <polygon points="0.61,0.44 1.12,0.44 1.12,0.79 0.61,0.79 " />
      <polygon points="1.23,0.44 1.73,0.44 1.73,0.79 1.23,0.79 " />
    </g>
  </IconSVG>
);
