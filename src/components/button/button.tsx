import React from "react";
import classNames from "classnames";

import "./style.scss";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  active?: boolean;
}

export const Button = React.forwardRef(
  (
    { children, disabled, active, className, ...props }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        data-active={active}
        className={classNames("skymp-button", className, {
          "skymp-button_disabled": disabled,
          "skymp-button_active": active
        })}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "SkympButton";
