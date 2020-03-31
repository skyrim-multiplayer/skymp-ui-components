import React, { useMemo } from "react";

export interface FooterSvgProps {
  id: string;
  width: number;
  height: number;
  holeCorner: number;
  marginFrame: number;
  strokeWidth: number;
  createDragMove: Function;
  createDragResize: Function;
  x: number;
  y: number;
}

export const FooterSvg = (props: FooterSvgProps) => {
  const marginLeft = useMemo(() => props.height / Math.sqrt(3), [props.height]); // 60deg
  const bottomSide = useMemo(() => props.width - 2 * marginLeft, [
    marginLeft,
    props.width
  ]);

  const backgroundPath = useMemo(
    () =>
      "M" +
      props.x +
      " " +
      (props.y + props.holeCorner - 1) +
      "l" +
      marginLeft +
      " " +
      (props.height + 1) +
      "h" +
      bottomSide +
      "l" +
      marginLeft +
      " -" +
      (props.height + 1) +
      "Z",
    [bottomSide, props.height, props.holeCorner, marginLeft, props.x, props.y]
  );

  const framePath = useMemo(
    () =>
      "M" +
      (props.x + props.marginFrame) +
      " " +
      props.y +
      "l" +
      marginLeft +
      " " +
      (props.height +
        props.holeCorner -
        props.marginFrame -
        0.5 * props.strokeWidth) +
      "h" +
      (bottomSide - 2 * props.marginFrame) +
      "l" +
      marginLeft +
      " -" +
      (props.height +
        props.holeCorner -
        props.marginFrame -
        0.5 * props.strokeWidth),
    [
      bottomSide,
      props.height,
      props.holeCorner,
      props.marginFrame,
      marginLeft,
      props.strokeWidth,
      props.x,
      props.y
    ]
  );

  return (
    <>
      <g id={props.id} strokeWidth={props.strokeWidth}>
        {/* backround of footer */}
        <path
          className="skymp-window__background"
          d={backgroundPath}
          fill="url(#skymp-window__background-gradient)"
        />
        {/* frame of footer */}
        <path
          // {...props.createDragMove(true, true)}
          className="skymp-window__frame-lines"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          stroke="url(#skymp-window__lines-gradient)"
          d={framePath}
        />
      </g>
    </>
  );
};
