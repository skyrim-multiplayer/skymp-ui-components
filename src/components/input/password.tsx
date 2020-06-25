import React, { useState, useEffect } from "react";
import classNames from "classnames";

import { Input, InputProps } from "./input";

import { EyeIcon } from "../../icons";

export interface InputPasswordProps extends InputProps {
  /**
   * show password value
   */
  defaultShow?: boolean;
  /**
   * hide eye icon
   */
  hiddenIcon?: boolean;
  /**
   * eye icon
   */
  eyeIcon?: React.ReactNode;
}

export const Password = React.forwardRef(
  (
    {
      defaultShow,
      className,
      hiddenIcon,
      eyeIcon,
      ...props
    }: InputPasswordProps,
    ref?: React.Ref<HTMLInputElement> | null
  ) => {
    const [showPassword, setShowPassword] = useState(defaultShow);

    useEffect(() => {
      setShowPassword(defaultShow);
    }, [defaultShow]);

    return (
      <div className={classNames("skymp-input-password", className)}>
        <Input
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={"skymp-input-password__input"}
        />
        {!hiddenIcon && (
          <div
            className="skymp-input-password__icon-wrapper"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Hide password" : "Show password"}
          >
            {eyeIcon ? <>{eyeIcon}</> : <EyeIcon isOpen={!showPassword} />}
          </div>
        )}
      </div>
    );
  }
);

Password.displayName = "SkympInputPassword";
