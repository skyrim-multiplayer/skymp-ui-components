import React, { useMemo } from "react";

import { TWindowGradient } from "./interfaces";

import { LinearGradient } from "./linear-gradient";
import { FrameCornerSvg } from "./corner";

import "./style.scss"

export interface ContentSvgProps {
  id: string;

  scale: number;
  width: number;
  height: number;

  marginFrame: number;
  holeCorner: number;
  strokeWidth: number;

  createDragMove: Function;
  createDragResize: Function;

  frameGradientSvg?: TWindowGradient;

  x: number;
  y: number;
}

export const ContentSvg = (props: ContentSvgProps) => {
  const lineSideCorner = useMemo(() => 19.151 * props.scale, [props.scale]);
  const lengthCorner = useMemo(() => lineSideCorner + 2 * props.marginFrame, [
    lineSideCorner,
    props.marginFrame
  ]);

  const widthBackgroundLine = useMemo(() => props.width - 2 * lengthCorner, [
    lengthCorner,
    props.width
  ]);
  const heightBackgroundLine = useMemo(() => props.height - 2 * lengthCorner, [
    props.height,
    lengthCorner
  ]);
  const widthLine = useMemo(
    () => props.width - 2 * (lineSideCorner + props.marginFrame),
    [lineSideCorner, props.marginFrame, props.width]
  );
  const heightLine = useMemo(
    () => props.height - 2 * (lineSideCorner + props.marginFrame),
    [props.height, lineSideCorner, props.marginFrame]
  );
  // top and right lines
  const firstLine = useMemo(() => props.marginFrame + lineSideCorner + 1, [
    lineSideCorner,
    props.marginFrame
  ]);
  // bottom and left lines
  const secondLine = useMemo(() => lineSideCorner + props.marginFrame - 1, [
    lineSideCorner,
    props.marginFrame
  ]);

  const backgroundPath = useMemo(
    () =>
      "M" +
      props.x +
      " " +
      props.y +
      "h" +
      lengthCorner +
      "v" +
      props.holeCorner +
      "h" +
      widthBackgroundLine +
      "v-" +
      props.holeCorner +
      "h" +
      lengthCorner +
      "v" +
      lengthCorner +
      "h-" +
      props.holeCorner +
      "v" +
      heightBackgroundLine +
      "h" +
      props.holeCorner +
      "v" +
      lengthCorner +
      "h-" +
      lengthCorner +
      "v-" +
      props.holeCorner +
      "h-" +
      widthBackgroundLine +
      "v" +
      props.holeCorner +
      "h-" +
      lengthCorner +
      "v-" +
      lengthCorner +
      "h" +
      props.holeCorner +
      "v-" +
      heightBackgroundLine +
      "h-" +
      props.holeCorner +
      "v-" +
      lengthCorner +
      "Z",
    [
      heightBackgroundLine,
      props.holeCorner,
      lengthCorner,
      widthBackgroundLine,
      props.x,
      props.y
    ]
  );

  return (
    <React.Fragment>
      <defs>
        {props.frameGradientSvg ? (
          [
            React.cloneElement(props.frameGradientSvg, {
              id: "skymp-window__top-left-corner-gradient",
              key: "skymp-window__top-left-corner-gradient",
              gradientTransform: `translate(${props.x}, ${props.y})`,
              gradientUnits: "userSpaceOnUse"
            }),
            React.cloneElement(props.frameGradientSvg, {
              id: "skymp-window__top-right-corner-gradient",
              key: "skymp-window__top-right-corner-gradient",
              gradientTransform: `translate(${props.y} -${props.width -
                props.x}) scale(${props.scale}) rotate(90)`,
              gradientUnits: "userSpaceOnUse"
            }),
            React.cloneElement(props.frameGradientSvg, {
              id: "skymp-window__bottom-left-corner-gradient",
              key: "skymp-window__bottom-left-corner-gradient",
              gradientTransform: `translate(-${props.height + props.y} ${
                props.x
              }) scale(${props.scale}) rotate(-90)`,
              gradientUnits: "userSpaceOnUse"
            }),
            React.cloneElement(props.frameGradientSvg, {
              id: "skymp-window__bottom-right-corner-gradient",
              key: "skymp-window__bottom-right-corner-gradient",
              gradientTransform: `translate(-${props.width -
                props.x} -${props.height + props.y})`,
              gradientUnits: "userSpaceOnUse"
            })
          ]
        ) : (
          <>
            <LinearGradient
              id="skymp-window__top-left-corner-gradient"
              gradientTransform={`translate(${props.x}, ${props.y})`}
              firstColor="rgba(var(--skymp-second-color), 1)"
              secondColor="rgba(var(--skymp-second-color), 1)"
            />
            <LinearGradient
              id="skymp-window__top-right-corner-gradient"
              gradientTransform={`translate(${props.y} -${props.width -
                props.x}) scale(${props.scale}) rotate(90)`}
              firstColor="rgba(var(--skymp-second-color), 1)"
              secondColor="rgba(var(--skymp-second-color), 1)"
            />
            <LinearGradient
              id="skymp-window__bottom-left-corner-gradient"
              gradientTransform={`translate(-${props.height + props.y} ${
                props.x
              }) scale(${props.scale}) rotate(-90)`}
              firstColor="rgba(var(--skymp-second-color), 1)"
              secondColor="rgba(var(--skymp-second-color), 1)"
            />
            <LinearGradient
              id="skymp-window__bottom-right-corner-gradient"
              gradientTransform={`translate(-${props.width -
                props.x} -${props.height + props.y})`}
              firstColor="rgba(var(--skymp-second-color), 1)"
              secondColor="rgba(var(--skymp-second-color), 1)"
            />
          </>
        )}
      </defs>
      <g id={props.id} strokeWidth={props.strokeWidth}>
        {/* background of content*/}
        <path
          // {...props.createDragMove(true, true)}
          className="skymp-window__background dash"
          fill="url(#skymp-window__background-gradient)"
          d={backgroundPath}
        />
        {/* frame of content */}
        <g className="skymp-window__lines">
          {/* frame of corner of content */}
          <g className="skymp-window__frame-corners">
            {/* top left corner of content frame */}
            <FrameCornerSvg
              // {...props.createDragResize(Direction.TopLeft, true)}
              transform={`translate(${props.x} ${props.y}) scale(${props.scale})`}
              fill="url(#skymp-window__top-left-corner-gradient)"
            />
            {/* top right corner of content frame */}
            <FrameCornerSvg
              // {...props.createDragResize(Direction.TopRight, true)}
              transform={`rotate(90) translate(${props.y} -${props.width -
                props.x}) scale(${props.scale})`}
              fill="url(#skymp-window__top-right-corner-gradient)"
            />
            {/* bottom left corner of content frame */}
            <FrameCornerSvg
              // {...props.createDragResize(Direction.BottomLeft, true)}
              transform={`rotate(-90) translate(-${props.height + props.y} ${
                props.x
              }) scale(${props.scale})`}
              fill="url(#skymp-window__bottom-left-corner-gradient)"
            />
            {/* bottom right corner of content frame */}
            <FrameCornerSvg
              // {...props.createDragResize(Direction.BottomRight, true)}
              transform={`rotate(180) translate(-${props.width -
                props.x} -${props.height + props.y}) scale(${props.scale})`}
              fill="url(#skymp-window__bottom-right-corner-gradient)"
            />
          </g>
          {/* lines of content frame */}
          <g
            className="skymp-window__frame-lines"
            stroke="url(#skymp-window__lines-gradient)"
          >
            {/* top line of content frame */}
            <path
              // {...props.createDragResize(Direction.Top, true)}
              d={`M${props.x + firstLine} ${props.y +
                props.holeCorner +
                props.marginFrame +
                0.5 * props.strokeWidth} h${widthLine}`}
            />
            {/* bottom line of content frame */}
            <path
              // {...props.createDragResize(Direction.Bottom, true)}
              d={`M${props.x + secondLine} ${props.y +
                props.height -
                props.holeCorner -
                props.marginFrame -
                0.5 * props.strokeWidth} h${widthLine}`}
            />
            {/* left line of content frame */}
            <path
              // {...props.createDragResize(Direction.Left, true)}
              d={`M${props.x +
                props.holeCorner +
                props.marginFrame +
                0.5 * props.strokeWidth} ${props.y +
                secondLine} v${heightLine}`}
            />
            {/* right line of content frame */}
            <path
              // {...props.createDragResize(Direction.Right, true)}
              d={`M${props.x +
                props.width -
                props.holeCorner -
                props.marginFrame -
                0.5 * props.strokeWidth} ${props.y + firstLine} v${heightLine}`}
            />
          </g>
        </g>
      </g>
    </React.Fragment>
  );
};
