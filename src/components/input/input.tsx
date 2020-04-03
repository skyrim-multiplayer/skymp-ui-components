import React, { useState, useCallback } from "react";
import classNames from "classnames";

import "./style.scss";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = React.forwardRef(
  (
    { className, icon, ...props }: InputProps,
    ref?: React.Ref<HTMLInputElement> | null | undefined
  ) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const onfocusHandler = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(true);

        if (props.onFocus) {
          props.onFocus(e);
        }
      },
      [props]
    );

    const onblurHandler = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(false);

        if (props.onBlur) {
          props.onBlur(e);
        }
      },
      [props]
    );

    return (
      <div
        className={classNames("skymp-input__wrapper", className, {
          "skymp-input_focus": isFocus
        })}
      >
        {icon && <div className="skymp-input__icon-wrapper">{icon}</div>}
        <input
          ref={ref}
          {...props}
          className={"skymp-input"}
          onFocus={onfocusHandler}
          onBlur={onblurHandler}
        />
      </div>
    );
  }
);

Input.displayName = "SkympInput";
