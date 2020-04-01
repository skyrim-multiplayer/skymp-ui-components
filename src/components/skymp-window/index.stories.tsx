import React from "react";

import { Window, WindowType } from "./index";
import { number, select, boolean } from "@storybook/addon-knobs";

export default {
  title: "Components/Window",
  component: Window
};

export const Default = () => {
  // const width = number("width", 200);
  // const height = number("width", 200);

  // const maxWidth = number("maxWidth", 400);
  // const maxHeight = number("maxHeight", 600);

  // const minWidth = number("minWidth", 100);
  // const minHeight = number("minHeight", 100);

  const top = number("top", 10);
  const left = number("left", 10);

  const type = select(
    "type",
    { default: WindowType.default, system: WindowType.system },
    WindowType.default
  );

  const scale = number("scale", 1);

  const isTrue = boolean("isTrue", true);

  const [isStyle, setIsStyle] = React.useState(false);

  return (
    <div>
      <Window
        type={type}
        // width={width}
        // height={height}
        top={top}
        left={left}
        // maxWidth={maxWidth}
        // maxHeight={maxHeight}
        // minWidth={minWidth}
        // minHeight={minHeight}
        scale={scale}
        content={
          <Child isTrue={isTrue} isStyle={isStyle} setIsStyle={setIsStyle} />
        }
      />
    </div>
  );
};

const Child = ({
  isTrue,
  isStyle,
  setIsStyle
}: {
  isTrue: boolean;
  isStyle: boolean;
  setIsStyle: Function;
}) => {
  return (
    <div>
      {isTrue && <div style={{ width: "320px", height: "220px" }}>Hi</div>}
      {!isTrue && (
        <div
          className="testest"
          style={isStyle ? { minWidth: "300px", minHeight: "300px" } : {}}
          onClick={() => setIsStyle(!isStyle)}
        >
          <p style={{ color: "green" }}>Hello</p>
        </div>
      )}
    </div>
  );
};
