import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import { boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { useMovable } from "./index";

import "./style.stories.scss";

const stories = storiesOf("useMovable", module);

stories.add("Overview", () => {
  const left: number = number("left (px)", 50);
  const top: number = number("top (px)", 50);
  const isMovable: boolean = boolean("isMovableComponent", true);

  const DragComponent = (props: { left: number; top: number }) => {
    const [leftState, setLeftState] = useState(props.left);
    const [topState, setTopState] = useState(props.top);

    const [createDragMove, hasMove, hasMoveStart, hasMoveEnd] = useMovable({
      left: leftState,
      top: topState,
      setLeft: setLeftState,
      setTop: setTopState,
      isMovable
    });

    useEffect(() => {
      if (hasMoveStart) {
        action("hasMoveStart")();
      }
      if (hasMove) {
        action("hasMove")();
      }
      if (hasMoveEnd) {
        action("hasMoveEnd")();
      }
    }, [hasMove, hasMoveEnd, hasMoveStart]);

    return (
      <div
        className={`story-usemovable__dnd-component ${
          hasMove ? "story-usemovable_grabbing" : ""
        }`}
        style={{
          left: leftState,
          top: topState
        }}
        {...createDragMove({ isMouseEvents: true })}
      >
        <h2>Drag me</h2>
      </div>
    );
  };

  return (
    <div>
      <DragComponent left={left} top={top} />
    </div>
  );
});
