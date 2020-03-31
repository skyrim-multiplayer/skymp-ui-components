import React, { useMemo } from "react";

import { TWindowGradient, WindowNodes } from "./interfaces";

import { LinearGradient } from "./linear-gradient";
import { FooterSvg } from "./footer";
import { HeaderLogoSvg } from "./header";
import { ContentSvg } from "./content";

export interface SystemWindowProps extends WindowNodes {
  width: number;
  height: number;

  scale: number;

  marginFrame: number;
  strokeWidth: number;
  holeCorner: number;

  createDragMove: Function;
  createDragResize: Function;

  backgroundGradientSvg?: TWindowGradient;
  frameGradientSvg?: TWindowGradient;
}

export const SystemWindow = (props: SystemWindowProps) => {
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

  const heightLogo = useMemo(
    () => (isLogoVisible ? props.height / 14.34210526315789 : 0),
    [isLogoVisible, props.height]
  );

  const widthHeader = useMemo(
    () => (isHeaderVisible ? props.width / 1.186046511627907 : 0),
    [isHeaderVisible, props.width]
  );

  const heightHeader = useMemo(
    () => (isHeaderVisible ? props.height / 12.97619047619048 : 0),
    [isHeaderVisible, props.height]
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
    <>
      <svg
        width={props.width}
        height={props.height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          position: "absolute",
          zIndex: -1
        }}
      >
        <defs>
          {props.frameGradientSvg !== undefined ? (
            React.cloneElement(props.frameGradientSvg, {
              id: "skymp-window__lines-gradient",
              gradientUnits: "userSpaceOnUse"
            })
          ) : (
            <LinearGradient
              id="skymp-window__lines-gradient"
              firstColor="rgba(var(--skymp-second-color), 1)"
              secondColor="rgba(var(--skymp-second-color), 1)"
            />
          )}
          {props.backgroundGradientSvg ? (
            React.cloneElement(props.backgroundGradientSvg, {
              id: "skymp-window__background-gradient",
              gradientUnits: "userSpaceOnUse"
            })
          ) : (
            <LinearGradient
              id="skymp-window__background-gradient"
              firstColor="rgba(var(--skymp-background-color), 1)"
              firstOpacity={0.8}
              secondColor="rgba(var(--skymp-background-color), 1)"
              secondOpacity={0.8}
            />
          )}
        </defs>
        <g>
          <ContentSvg
            id="skymp-window__content"
            width={props.width}
            height={heightContent}
            scale={props.scale}
            marginFrame={props.marginFrame}
            holeCorner={props.holeCorner}
            strokeWidth={props.strokeWidth}
            createDragMove={props.createDragMove}
            createDragResize={props.createDragResize}
            frameGradientSvg={props.frameGradientSvg}
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
            <HeaderLogoSvg
              logoId="skymp-window__logo"
              headerId="skymp-window__header"
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
            <FooterSvg
              id="skymp-window__footer"
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
          // {...props.createDragMove()}
          className="skymp-window__logo"
          style={{ width: widthLogo, height: heightLogo }}
        >
          {props.logo}
        </div>
      )}
      {isHeaderVisible && (
        <div
          // {...props.createDragMove()}
          className="skymp-window__header"
          style={{ width: widthHeader, height: heightHeader }}
        >
          {props.header}
        </div>
      )}
      <div
        // {...props.createDragMove()}
        className="skymp-window__content"
        // style={{ width: props.width, height: heightContent }}
      >
        {props.content}
      </div>
      {isFooterVisible && (
        <div
          // {...props.createDragMove()}
          className="skymp-window__footer"
          style={{ width: widthFooter, height: heightFooter }}
        >
          {props.footer}
        </div>
      )}
    </>
  );
};
