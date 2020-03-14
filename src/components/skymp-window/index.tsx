import React, { useState, useMemo, useEffect } from "react";

import { useWindow, Direction } from "../../hooks/useWindow";

import "./style.scss";

export enum SkympWindowType {
  default,
  system
}

export interface SkympWindowProps {
  type?: SkympWindowType;
  isMovable?: boolean;
  isResizable?: boolean;
  width: number;
  height: number;
  top?: number;
  left?: number;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  scale?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  backgroundGradientSVG?: React.FunctionComponentElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frameGradientSVG?: React.FunctionComponentElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo?: React.FunctionComponentElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  header?: React.FunctionComponentElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: React.FunctionComponentElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  footer?: React.FunctionComponentElement<any>;
}

export const SkympWindow = ({
  type = SkympWindowType.default,
  isMovable = false,
  isResizable = false,
  width = type === SkympWindowType.system ? 1275 : 0,
  height = type === SkympWindowType.system ? 680 : 0,
  top = 0,
  left = 0,
  scale = 1,
  ...props
}: SkympWindowProps) => {
  // const ref = useRef();

  const win = useWindow({
    width,
    height,
    top,
    left,
    isMovable,
    isResizable,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
    minWidth: props.minWidth,
    minHeight: props.minHeight
  });

  const [marginFrame] = useState(3.203 * scale);
  const [strokeWidth] = useState(2.884 * scale);
  const [holeCorner] = useState(4.665 * scale);

  const [hasSize, setHasSize] = useState(false);

  useEffect(() => {
    setHasSize(false);
  }, [props.content]);

  // useEffect(() => {
  //   if (ref.current && !hasSize) {
  //     win.setWidth(ref.current.clientWidth);
  //     win.setHeight(ref.current.clientHeight);
  //     setHasSize(true);
  //   }
  // }, [hasSize, win]);

  return (
    <div
      // ref={ref}
      className={`skymp-window`}
      style={{
        position: "absolute",
        top: win.top,
        left: win.left
      }}
    >
      {!hasSize && <div>{props.content}</div>}
      {win.width !== 0 &&
        win.height !== 0 &&
        hasSize &&
        (type === SkympWindowType.system ? (
          <SkympSystemTypeWindow
            width={win.width}
            height={win.height}
            logo={props.logo}
            header={props.header}
            content={props.content}
            footer={props.footer}
            scale={scale}
            marginFrame={marginFrame}
            strokeWidth={strokeWidth}
            holeCorner={holeCorner}
            createDragMove={win.createDragMove}
            createDragResize={(direction: Direction, isMouseEvents: boolean) =>
              win.createDragResize({
                direction,
                isMouseEvents,
                isResizable: false
              })
            }
            frameGradientSVG={props.frameGradientSVG}
            backgroundGradientSVG={props.backgroundGradientSVG}
          />
        ) : (
          <SkympSystemTypeWindow
            width={win.width}
            height={win.height}
            content={props.content}
            scale={scale}
            marginFrame={marginFrame}
            strokeWidth={strokeWidth}
            holeCorner={holeCorner}
            createDragMove={win.createDragMove}
            createDragResize={win.createDragResize}
            frameGradientSVG={props.frameGradientSVG}
            backgroundGradientSVG={props.backgroundGradientSVG}
          />
        ))}
    </div>
  );
};

export interface SkympSystemTypeWindowProps {
  width: number;
  height: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo?: React.FunctionComponentElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  header?: React.FunctionComponentElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: React.FunctionComponentElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  footer?: React.FunctionComponentElement<any>;
  scale: number;
  marginFrame: number;
  strokeWidth: number;
  holeCorner: number;
  createDragMove: Function;
  createDragResize: Function;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  backgroundGradientSVG?: React.FunctionComponentElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frameGradientSVG?: React.FunctionComponentElement<any>;
}

export const SkympSystemTypeWindow = (props: SkympSystemTypeWindowProps) => {
  const isHeaderVisible = useMemo(() => (props.header ? true : false), [
    props.header
  ]);
  const isLogoVisible = useMemo(
    () => (props.logo && isHeaderVisible ? true : false),
    [isHeaderVisible, props.logo]
  );
  const isFooterVisible = useMemo(() => (props.footer ? true : false), [
    props.footer
  ]);

  // These magic numbers are derived empirically through the ratio
  const widthLogo = useMemo(
    () => (isLogoVisible ? props.width / 8.732876712328767 : 0),
    [isLogoVisible, props.width]
  );

  const [heightLogo] = useState(
    isLogoVisible ? props.height / 14.34210526315789 : 0
  );

  const widthHeader = useMemo(
    () => (isHeaderVisible ? props.width / 1.186046511627907 : 0),
    [isHeaderVisible, props.width]
  );

  const [heightHeader] = useState(
    isHeaderVisible ? props.height / 12.97619047619048 : 0
  );

  const widthFooter = useMemo(
    () => (isFooterVisible ? props.width / 1.577970297029703 : 0),
    [isFooterVisible, props.width]
  );
  const heightFooter = useMemo(
    () => (isFooterVisible ? props.height / 16.26865671641791 : 0),
    [isFooterVisible, props.height]
  );

  const heightContent = useMemo(
    () => props.height - heightLogo - heightHeader - heightFooter,
    [heightFooter, heightHeader, heightLogo, props.height]
  );
  return (
    <React.Fragment>
      <svg
        width={props.width}
        height={props.height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          position: "absolute"
        }}
      >
        <defs>
          {props.frameGradientSVG ? (
            React.cloneElement(props.frameGradientSVG, {
              id: "skymp-lines-gradient",
              gradientUnits: "userSpaceOnUse"
            })
          ) : (
            <SkympLinearGradient id="skymp-lines-gradient" />
          )}
          {props.backgroundGradientSVG ? (
            React.cloneElement(props.backgroundGradientSVG, {
              id: "skymp-background-gradient",
              gradientUnits: "userSpaceOnUse"
            })
          ) : (
            <SkympLinearGradient
              id="skymp-background-gradient"
              firstColor="#000"
              firstOpacity={0.8}
              secondColor="#000"
              secondOpacity={0.8}
            />
          )}
        </defs>
        <g>
          <SkympContentWindowSVG
            id="content"
            width={props.width}
            height={heightContent}
            scale={props.scale}
            marginFrame={props.marginFrame}
            holeCorner={props.holeCorner}
            strokeWidth={props.strokeWidth}
            createDragMove={props.createDragMove}
            createDragResize={props.createDragResize}
            frameGradientSVG={props.frameGradientSVG}
            x={0}
            y={
              props.header
                ? heightHeader -
                  props.holeCorner +
                  (props.logo ? heightLogo : 0)
                : 0
            }
          />
          {isHeaderVisible && (
            <SkympHeaderWithLogoWindowSVG
              logoId="logo"
              headerId="header"
              widthHeader={widthHeader}
              heightHeader={heightHeader}
              widthLogo={widthLogo}
              heightLogo={heightLogo}
              marginFrame={props.marginFrame}
              strokeWidth={props.strokeWidth}
              isLogoVisible={isLogoVisible}
              createDragMove={props.createDragMove}
              createDragResize={props.createDragResize}
              x={0.5 * (props.width - widthHeader)}
              y={0}
            />
          )}
          {isFooterVisible && (
            <SkympFooterWindowSVG
              id="footer"
              width={widthFooter}
              height={heightFooter}
              marginFrame={props.marginFrame}
              holeCorner={props.holeCorner}
              strokeWidth={props.strokeWidth}
              createDragMove={props.createDragMove}
              createDragResize={props.createDragResize}
              x={0.5 * (props.width - widthFooter)}
              y={props.height - heightFooter - 3 * props.holeCorner}
            />
          )}
        </g>
      </svg>
      {isLogoVisible && (
        <div
          {...props.createDragMove()}
          className="logo"
          style={{ width: widthLogo, height: heightLogo }}
        >
          {props.logo}
        </div>
      )}
      {isHeaderVisible && (
        <div
          {...props.createDragMove()}
          className="header"
          style={{ width: widthHeader, height: heightHeader }}
        >
          {props.header}
        </div>
      )}
      <div
        {...props.createDragMove()}
        className="content"
        style={{ width: props.width, height: heightContent }}
      >
        {props.content}
      </div>
      {isFooterVisible && (
        <div
          {...props.createDragMove()}
          className="footer"
          style={{ width: widthFooter, height: heightFooter }}
        >
          {props.footer}
        </div>
      )}
    </React.Fragment>
  );
};

export const SkympFrameCornerWindowSVG = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <g {...props} id={props.id}>
      <path d="M10.752 22.354 L10.752,15.908 L12.626 15.908 L12.626 13.729 L7.868 13.729 L7.868 15.908 L7.868 22.354 Z" />
      <path d="M22.354 3.203 L3.203 3.203 L3.203 21.902 L7.203 21.902 L7.203 19.231 L5.329 19.231 L5.329 5.874 L19.616 5.874 L19.616 13.397 L22.354 13.397 Z" />
      <path d="M16.453 19.231 L13.623 19.231 L13.623 7.097 L18.527 7.097 L18.527 9.822 L16.453 9.822 Z" />
      <path d="M11.536 20.095 L20.294 20.095 L20.294 18.061 L23.005 18.061 L23.005 22.354 L20.294 22.354 L11.536 22.354 Z" />
      <path d="M16.427 29.77l0 -6.339 -2.791 0 0 10.526c5.755,-2.313 13.317,-6.379 18.208,-16.865l0.027 0 0.292 -0.678c0.306,-0.691 0.611,-1.395 0.904,-2.126l0 -0 0 0 0 0 -0 0 -15.138 0 0 2.791 10.739 0c-2.884,5.569 -6.858,9.901 -12.214,12.679z" />
    </g>
  );
};

export interface SkympContentWindowSVGProps {
  id: string;
  scale: number;
  width: number;
  height: number;
  marginFrame: number;
  holeCorner: number;
  strokeWidth: number;
  createDragMove: Function;
  createDragResize: Function;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frameGradientSVG?: React.FunctionComponentElement<any>;
  x: number;
  y: number;
}

export const SkympContentWindowSVG = (props: SkympContentWindowSVGProps) => {
  const [lineSideCorner] = useState(19.151 * props.scale);
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
      lengthCorner +
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
        {props.frameGradientSVG ? (
          [
            React.cloneElement(props.frameGradientSVG, {
              id: "skymp-topleft-corner-gradient",
              key: "skymp-topleft-corner-gradient",
              gradientTransform: `translate(${props.x}, ${props.y})`,
              gradientUnits: "userSpaceOnUse"
            }),
            React.cloneElement(props.frameGradientSVG, {
              id: "skymp-topright-corner-gradient",
              key: "skymp-topright-corner-gradient",
              gradientTransform: `translate(${props.y} -${props.width -
                props.x}) scale(${props.scale}) rotate(90)`,
              gradientUnits: "userSpaceOnUse"
            }),
            React.cloneElement(props.frameGradientSVG, {
              id: "skymp-bottomleft-corner-gradient",
              key: "skymp-bottomleft-corner-gradient",
              gradientTransform: `translate(-${props.height + props.y} ${
                props.x
              }) scale(${props.scale}) rotate(-90)`,
              gradientUnits: "userSpaceOnUse"
            }),
            React.cloneElement(props.frameGradientSVG, {
              id: "skymp-bottomright-corner-gradient",
              key: "skymp-bottomright-corner-gradient",
              gradientTransform: `translate(-${props.width -
                props.x} -${props.height + props.y})`,
              gradientUnits: "userSpaceOnUse"
            })
          ]
        ) : (
          <>
            <SkympLinearGradient
              id="skymp-topleft-corner-gradient"
              gradientTransform={`translate(${props.x}, ${props.y})`}
            />
            <SkympLinearGradient
              id="skymp-topright-corner-gradient"
              gradientTransform={`translate(${props.y} -${props.width -
                props.x}) scale(${props.scale}) rotate(90)`}
            />
            <SkympLinearGradient
              id="skymp-bottomleft-corner-gradient"
              gradientTransform={`translate(-${props.height + props.y} ${
                props.x
              }) scale(${props.scale}) rotate(-90)`}
            />
            <SkympLinearGradient
              id="skymp-bottomright-corner-gradient"
              gradientTransform={`translate(-${props.width -
                props.x} -${props.height + props.y})`}
            />
          </>
        )}
      </defs>
      <g id={props.id} strokeWidth={props.strokeWidth}>
        {/* background of content*/}
        <path
          {...props.createDragMove(true, true)}
          className="background"
          fill="url(#skymp-background-gradient)"
          d={backgroundPath}
        />
        {/* frame of content */}
        <g className="lines">
          {/* frame of corner of content */}
          <g className="frame-corners">
            {/* top left corner of content frame */}
            <SkympFrameCornerWindowSVG
              {...props.createDragResize(Direction.TopLeft, true)}
              transform={`translate(${props.x} ${props.y}) scale(${props.scale})`}
              fill="url(#skymp-topleft-corner-gradient)"
            />
            {/* top right corner of content frame */}
            <SkympFrameCornerWindowSVG
              {...props.createDragResize(Direction.TopRight, true)}
              transform={`rotate(90) translate(${props.y} -${props.width -
                props.x}) scale(${props.scale})`}
              fill="url(#skymp-topright-corner-gradient"
            />
            {/* bottom left corner of content frame */}
            <SkympFrameCornerWindowSVG
              {...props.createDragResize(Direction.BottomLeft, true)}
              transform={`rotate(-90) translate(-${props.height + props.y} ${
                props.x
              }) scale(${props.scale})`}
              fill="url(#skymp-bottomleft-corner-gradient"
            />
            {/* bottom right corner of content frame */}
            <SkympFrameCornerWindowSVG
              {...props.createDragResize(Direction.BottomRight, true)}
              transform={`rotate(180) translate(-${props.width -
                props.x} -${props.height + props.y}) scale(${props.scale})`}
              fill="url(#skymp-bottomright-corner-gradient"
            />
          </g>
          {/* lines of content frame */}
          <g className="frame-lines" stroke="url(#skymp-lines-gradient)">
            {/* top line of content frame */}
            <path
              {...props.createDragResize(Direction.Top, true)}
              d={`M${props.x + firstLine} ${props.y +
                props.holeCorner +
                props.marginFrame +
                0.5 * props.strokeWidth} h${widthLine}`}
            />
            {/* bottom line of content frame */}
            <path
              {...props.createDragResize(Direction.Bottom, true)}
              d={`M${props.x + secondLine} ${props.y +
                props.height -
                props.holeCorner -
                props.marginFrame -
                0.5 * props.strokeWidth} h${widthLine}`}
            />
            {/* left line of content frame */}
            <path
              {...props.createDragResize(Direction.Left, true)}
              d={`M${props.x +
                props.holeCorner +
                props.marginFrame +
                0.5 * props.strokeWidth} ${props.y +
                secondLine} v${heightLine}`}
            />
            {/* right line of content frame */}
            <path
              {...props.createDragResize(Direction.Right, true)}
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

export interface SkympHeaderWithLogoWindowSVGProps {
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

export const SkympHeaderWithLogoWindowSVG = (
  props: SkympHeaderWithLogoWindowSVGProps
) => {
  const [marginLeft] = useState(props.heightHeader / Math.sqrt(3)); // 60def
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
            {...props.createDragMove(true, true)}
            className="background"
            fill="url(#skymp-background-gradient)"
            d={backgroundPathHeader}
          />
          {/* frame of header */}
          <path
            className="frame-lines"
            strokeWidth={props.strokeWidth}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            stroke="url(#skymp-lines-gradient)"
            d={framePathHeader}
          />
        </g>
        {/* logo */}
        <g id={props.logoId} strokeWidth={props.strokeWidth}>
          {/* background of logo */}
          <path
            {...props.createDragMove(true, true)}
            className="background"
            fill="url(#skymp-background-gradient)"
            d={backgroundPathLogo}
          />
          {/* frame of logo */}
          <path
            className="frame-lines"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            stroke="url(#skymp-lines-gradient)"
            d={framePathLogo}
          />
        </g>
      </g>
    </React.Fragment>
  );
};

export interface SkympFooterWindowSVGProps {
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

export const SkympFooterWindowSVG = (props: SkympFooterWindowSVGProps) => {
  const [marginLeft] = useState(props.height / Math.sqrt(3)); // 60deg
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
    <React.Fragment>
      <g id={props.id} strokeWidth={props.strokeWidth}>
        {/* backround of footer */}
        <path
          className="background"
          d={backgroundPath}
          fill="url(#skymp-background-gradient)"
        />
        {/* frame of footer */}
        <path
          {...props.createDragMove(true, true)}
          className="frame-lines"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          stroke="url(#skymp-lines-gradient)"
          d={framePath}
        />
      </g>
    </React.Fragment>
  );
};

// animate for example

export interface SkympLinearGradientProps {
  id: string;
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
  children?: React.ReactChild;
  gradientTransform?: string;
  firstOffset?: string | number;
  secondOffset?: string | number;
  firstColor?: string;
  secondColor?: string;
  firstOpacity?: number;
  secondOpacity?: number;
}

export const SkympLinearGradient = (props: SkympLinearGradientProps) => {
  return (
    <linearGradient
      id={props.id ? props.id : ""}
      x1={props.x1 ? props.x1 : "0%"}
      y1={props.y1 ? props.y1 : "0%"}
      x2={props.x2 ? props.x2 : "0%"}
      y2={props.y2 ? props.y2 : "100%"}
      gradientUnits="userSpaceOnUse"
      gradientTransform={props.gradientTransform ? props.gradientTransform : ""}
    >
      {props.children ? (
        props.children
      ) : (
        <>
          {" "}
          <stop
            offset={props.firstOffset ? props.firstOffset : "0%"}
            style={{
              stopColor: props.firstColor ? props.firstColor : "",
              stopOpacity: props.firstOpacity ? props.firstOpacity : 1
            }}
            className={props.firstColor ? "" : "skymp-second-stopcolor"}
          >
            {/* {props.id !== "skymp-background-gradient" && (
              <>
                <animate
                  attributeName="stop-color"
                  values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue"
                  dur="14s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="offset"
                  values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95"
                  dur="14s"
                  repeatCount="indefinite"
                />
              </>
            )} */}
          </stop>
          <stop
            offset={props.secondOffset ? props.secondOffset : "100%"}
            style={{
              stopColor: props.secondColor ? props.secondColor : "",
              stopOpacity: props.secondOpacity ? props.secondOpacity : 1
            }}
            className={props.secondColor ? "" : "skymp-second-stopcolor"}
          >
            {/* {props.id !== "skymp-background-gradient" && (
              <>
                <animate
                  attributeName="stop-color"
                  values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue"
                  dur="14s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="offset"
                  values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95"
                  dur="14s"
                  repeatCount="indefinite"
                />
              </>
            )} */}
          </stop>
        </>
      )}
    </linearGradient>
  );
};

export default SkympWindow;
