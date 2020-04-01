import React from "react";
import classNames from "classnames";

import { ArrowButtonIcon } from "../../icons";

export interface ButtonGroupProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any[];
  className?: string;
  style?: React.CSSProperties;
}

export const Group = ({ children, className, ...props }: ButtonGroupProps) => {
  return (
    <div {...props} className={classNames("skymp-button-group", className)}>
      {React.Children.map(children, (child, i) => {
        if (
          child.type.displayName !== "SkympButton" &&
          process.env.NODE_ENV === "development"
        ) {
          throw new Error(
            "Button.Group should be have children type Skyrim Royale Button"
          );
        }
        return (
          <div key={i.toString()} className="skymp-button-group__item">
            <ArrowButtonIcon className="skymp-button-group__icon" />
            {child}
            <ArrowButtonIcon className="skymp-button-group__icon" />
          </div>
        );
      })}
    </div>
  );
};
