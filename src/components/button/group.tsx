import React from "react";
import classNames from "classnames";

import { ArrowButtonIcon } from "../../icons";

export interface ButtonGroupProps {
  /**
   * visible arrow icons when no hover
   */
  visibleIcons?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any[];
  className?: string;
  style?: React.CSSProperties;
}

export const Group = ({
  children,
  className,
  visibleIcons,
  ...props
}: ButtonGroupProps) => {
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

        return React.cloneElement(child, {
          key: i.toString(),
          className: classNames(
            "skymp-button-group__button",
            {
              "skymp-button-group_visible": visibleIcons,
              "skymp-button-group_active": child.props.active
            },
            child.props.className
          ),
          children: (
            <>
              <ArrowButtonIcon className="skymp-button-group__icon" />
              {child.props.children}
              <ArrowButtonIcon className="skymp-button-group__icon" />
            </>
          )
        });
      })}
    </div>
  );
};
