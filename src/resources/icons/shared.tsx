import React from "react";

export interface SkympIconSVGProps {
  className?: string;
  style?: React.CSSProperties;
  SVGProps?: React.SVGProps<SVGSVGElement>;
  children?: React.ReactChild;
}

export const IconSVG = (props: SkympIconSVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }}
    {...props.SVGProps}
  >
    {props.children}
  </svg>
);
