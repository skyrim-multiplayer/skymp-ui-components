import React, { useCallback, useState, useEffect } from "react";
import classNames from "classnames";

import { CheckboxIcon } from "../../icons/checkbox";

import "./style.scss";

export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  checkmarkPosition?: "left" | "right";
}

export const Checkbox = React.forwardRef(
  (
    {
      checkmarkPosition = "left",
      className,
      style,
      children,
      onChange,
      checked,
      defaultChecked,
      ...props
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [isChecked, setIsChecked] = useState(defaultChecked || checked);

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    const changeHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        if (onChange) onChange(e);
      },
      [onChange]
    );

    return (
      <label
        className={classNames(
          "skymp-checkbox",
          className,
          `skymp-checkbox_${checkmarkPosition}`,
          { "skymp-checkbox_disabled": props.disabled }
        )}
        style={style}
      >
        <CheckboxIcon isChecked={isChecked} className="skymp-checkbox__icon" />
        <input
          ref={ref}
          {...props}
          defaultChecked={isChecked}
          type="checkbox"
          onChange={changeHandler}
          style={{ display: "none" }}
        />
        {children && (
          <span className="skymp-checkbox__children">{children}</span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "SkympCheckbox";
