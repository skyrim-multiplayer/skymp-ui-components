import React from "react";
import classNames from "classnames";

import "./style.scss";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = ({
  children,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames("skymp-button", className, {
        "skymp-button_disabled": disabled
      })}
    >
      {children && <span className="skymp-button__children">{children}</span>}
    </button>
  );
};

Button.displayName = "SkympButton"
