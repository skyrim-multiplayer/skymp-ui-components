import React from "react";

import { IconSVG } from "../shared";

export interface CheckboxSVGProps extends React.SVGProps<SVGSVGElement> {
  isChecked?: boolean;
}

export const CheckboxIcon = ({ isChecked, ...props }: CheckboxSVGProps) => {
  return (
    <IconSVG
      {...props}
      viewBox="0 0 0.61 0.63"
      strokeWidth="0.05"
      strokeMiterlimit="22.9256"
    >
      <g>
        <rect
          stroke="currentColor"
          fill="none"
          x="0.03"
          y="0.06"
          width="0.54"
          height="0.54"
          rx="0.11"
          ry="0.11"
        />
        {isChecked && (
          <path
            stroke="none"
            fill="currentColor"
            d={
              "M0.31 0.37l-0.1 -0.11c-0.01,-0.01 -0.01,-0.01 -0.01,-0.01l-0.04 -0.05c-0.03,-0.04 -0.09,0.01 -0.05,0.05 0,0 0.01,0.01 0.01,0.01l0.1 0.11c0.01,0.01 0.01,0.01 0.02,0.02 0,0 0.01,0.01 0.01,0.01l0.03 0.04c0.01,0.01 0.02,0.02 0.03,0.03 0.02,0.01 0.04,-0 0.05,-0.02 0.01,-0.02 0.02,-0.03 0.03,-0.05 0.01,-0.01 0.02,-0.03 0.03,-0.04 0.01,-0.02 0.02,-0.03 0.03,-0.05l0.15 -0.22c0.01,-0.02 0.03,-0.03 0.03,-0.05 0,-0.03 -0.03,-0.04 -0.05,-0.03 -0.02,0.01 -0.03,0.03 -0.04,0.05 -0.01,0.02 -0.02,0.03 -0.03,0.05l-0.18 0.27z"
            }
          />
        )}
      </g>
    </IconSVG>
  );
};
