import React from "react";

export interface LinearGradientProps {
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

export const LinearGradient = (props: LinearGradientProps) => {
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
          <stop
            offset={props.firstOffset ? props.firstOffset : "0%"}
            style={{
              stopColor: props.firstColor ? props.firstColor : "",
              stopOpacity: props.firstOpacity ? props.firstOpacity : 1
            }}
          ></stop>
          <stop
            offset={props.secondOffset ? props.secondOffset : "100%"}
            style={{
              stopColor: props.secondColor ? props.secondColor : "",
              stopOpacity: props.secondOpacity ? props.secondOpacity : 1
            }}
          ></stop>
        </>
      )}
    </linearGradient>
  );
};
