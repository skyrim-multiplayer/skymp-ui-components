import React, {
  useMemo,
  useEffect,
  useState,
  useRef,
  useLayoutEffect
} from "react";

import { useWindow } from "../../hooks/useWindow";

import { TWindowGradient, WindowNodes, WindowSizePosition } from "./interfaces";
import { SystemWindow } from "./system-window";

export enum WindowType {
  default,
  system
}

// when `type === WindowType.default`
const SYSTEM_WINDOW_WIDTH = 1275; // px
const SYSTEM_WINDOW_HEIGHT = 680; // px

export interface WindowProps extends WindowNodes, WindowSizePosition {
  type?: WindowType;

  isMovable?: boolean;
  isResizable?: boolean;

  frameGradientSvg?: TWindowGradient;
  backgroundGradientSvg?: TWindowGradient;
}

export const Window = ({
  type = WindowType.default,
  isMovable = false,
  isResizable = false,
  top = 0,
  left = 0,
  scale = 1,
  ...props
}: WindowProps) => {
  const marginFrame = useMemo(() => 3.203 * scale, [scale]);
  const strokeWidth = useMemo(() => 2.884 * scale, [scale]);
  const holeCorner = useMemo(() => 4.665 * scale, [scale]);

  const [isLayoutEffect, setIsLayoutEffect] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    setIsLayoutEffect(true);
  }, []);

  const win = useWindow({
    width: props.width as number,
    height: props.height as number,
    top,
    left,
    isMovable,
    isResizable,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
    minWidth: props.minWidth,
    minHeight: props.minHeight
  });

  useEffect(() => {
    console.log("BIG EFF");
    if (isLayoutEffect) {
      if (type === WindowType.default) {
        if (props.width === undefined) {
          win.setWidth((ref.current && ref.current.offsetWidth) as number);
        } else {
          win.setWidth(props.width);
        }

        if (props.height === undefined) {
          win.setHeight((ref.current && ref.current.offsetHeight) as number);
        } else {
          win.setHeight(props.height);
        }
      } else if (type === WindowType.system) {
        win.setWidth(SYSTEM_WINDOW_WIDTH);
        win.setHeight(SYSTEM_WINDOW_HEIGHT);
      }
    }
  }, [isLayoutEffect, props.height, props.width, type, win, ref]);

  console.log("win: ", win);
  console.log("ref: ", ref);

  return (
    <div
      ref={ref}
      className={`skymp-window`}
      style={{
        position: "absolute",
        top: win.top,
        left: win.left,
        opacity: ref ? 1 : 0
      }}
    >
      {win.width !== undefined && win.height !== undefined && (
        <SystemWindow
          width={win.width}
          height={win.height}
          logo={type === WindowType.system ? props.logo : undefined}
          header={type === WindowType.system ? props.header : undefined}
          content={props.content}
          footer={type === WindowType.system ? props.footer : undefined}
          scale={scale}
          marginFrame={marginFrame}
          strokeWidth={strokeWidth}
          holeCorner={holeCorner}
          createDragMove={
            type === WindowType.system
              ? () => win.createDragMove({ isMovable: false })
              : win.createDragMove
          }
          createDragResize={
            type === WindowType.system
              ? () => win.createDragResize
              : win.createDragResize
          }
          frameGradientSvg={props.frameGradientSvg}
          backgroundGradientSvg={props.backgroundGradientSvg}
        />
      )}
    </div>
  );
};
