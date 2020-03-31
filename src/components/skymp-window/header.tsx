import React, { useMemo } from "react";

export interface HeaderLogoSvgProps {
  logoId: string;
  headerId: string;

  widthHeader: number;
  heightHeader: number;

  widthLogo: number;
  heightLogo: number;

  marginFrame: number;
  strokeWidth: number;

  isLogoVisible: boolean;

  createDragMove: Function;
  createDragResize: Function;

  x: number;
  y: number;
}

export const HeaderLogoSvg = (props: HeaderLogoSvgProps) => {
  // 60deg
  const marginLeft = useMemo(() => props.heightHeader / Math.sqrt(3), [
    props.heightHeader
  ]);

  const upperSide = useMemo(() => props.widthHeader - 2 * marginLeft, [
    marginLeft,
    props.widthHeader
  ]);

  const upperSideLogo = useMemo(
    () => (upperSide - props.widthLogo - 2 * props.marginFrame) / 2,
    [props.marginFrame, upperSide, props.widthLogo]
  );

  const backgroundPathLogo = useMemo(
    () =>
      "M" +
      (props.x + 0.5 * (props.widthHeader - props.widthLogo)) +
      " " +
      (props.y + props.heightLogo + 1) +
      "l" +
      marginLeft +
      " -" +
      (props.heightLogo + 1) +
      "h" +
      (props.widthLogo - marginLeft * 2) +
      "l" +
      marginLeft +
      " " +
      (props.heightLogo + 1) +
      "Z",
    [
      props.x,
      props.widthHeader,
      props.widthLogo,
      props.y,
      props.heightLogo,
      marginLeft
    ]
  );

  const framePathLogo = useMemo(
    () =>
      "M" +
      (props.x +
        0.5 * (props.widthHeader - props.widthLogo) +
        props.marginFrame -
        marginLeft) +
      " " +
      (props.y +
        props.heightLogo +
        props.marginFrame +
        0.5 * props.strokeWidth) +
      "h" +
      marginLeft +
      "l" +
      marginLeft +
      " -" +
      props.heightLogo +
      "h" +
      (props.widthLogo - 2 * marginLeft - 2 * props.marginFrame) +
      "l" +
      marginLeft +
      " " +
      props.heightLogo +
      "h" +
      marginLeft,
    [
      marginLeft,
      props.heightLogo,
      props.marginFrame,
      props.strokeWidth,
      props.widthHeader,
      props.widthLogo,
      props.x,
      props.y
    ]
  );

  const backgroundPathHeader = useMemo(
    () =>
      "M" +
      props.x +
      " " +
      (props.y + props.heightHeader + props.heightLogo + 1) +
      "l" +
      marginLeft +
      " -" +
      (props.heightHeader + 1) +
      "h" +
      upperSide +
      "l" +
      marginLeft +
      " " +
      (props.heightHeader + 1) +
      "Z",
    [
      props.heightHeader,
      props.heightLogo,
      marginLeft,
      upperSide,
      props.x,
      props.y
    ]
  );

  const framePathHeader = useMemo(
    () =>
      "M" +
      (props.x + props.marginFrame) +
      " " +
      (props.y +
        props.heightHeader +
        props.heightLogo +
        props.marginFrame +
        0.5 * props.strokeWidth) +
      "l" +
      marginLeft +
      " -" +
      props.heightHeader +
      "h" +
      (props.isLogoVisible
        ? upperSideLogo + "m" + props.widthLogo + " 0h" + upperSideLogo
        : upperSide - 2 * props.marginFrame) +
      "l" +
      marginLeft +
      " " +
      props.heightHeader,
    [
      props.heightHeader,
      props.heightLogo,
      props.isLogoVisible,
      props.marginFrame,
      marginLeft,
      props.strokeWidth,
      upperSide,
      upperSideLogo,
      props.widthLogo,
      props.x,
      props.y
    ]
  );

  return (
    <React.Fragment>
      <g>
        {/* header */}
        <g id={props.headerId}>
          {/* background of header */}
          <path
            // {...props.createDragMove(true, true)}
            className="skymp-window__background"
            fill="url(#skymp-window__background-gradient)"
            d={backgroundPathHeader}
          />
          {/* frame of header */}
          <path
            className="skymp-window__frame-lines"
            strokeWidth={props.strokeWidth}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            stroke="url(#skymp-window__lines-gradient)"
            d={framePathHeader}
          />
        </g>
        {/* logo */}
        <g id={props.logoId} strokeWidth={props.strokeWidth}>
          {/* background of logo */}
          <path
            // {...props.createDragMove(true, true)}
            className="skymp-window__background"
            fill="url(#skymp-window__background-gradient)"
            d={backgroundPathLogo}
          />
          {/* frame of logo */}
          <path
            className="skymp-window__frame-lines"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            stroke="url(#skymp-window__lines-gradient)"
            d={framePathLogo}
          />
        </g>
      </g>
    </React.Fragment>
  );
};
