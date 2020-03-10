import React, { useState, DragEvent } from "react";

export enum Direction {
  Left,
  Right,
  Top,
  Bottom,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight
}

export interface UseResizableProps {
  /**
   * initial width component property
   */
  width: number;
  /**
   * initial height component property
   */
  height: number;
  /**
   * initial top component property
   */
  top: number;
  /**
   * initial left component propety
   */
  left: number;
  /**
   * React.Dispatch function for set width state
   */
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  /**
   * React.Dispatch function for set height state
   */
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  /**
   * React.Dispatch function for set top state
   */
  setTop: React.Dispatch<React.SetStateAction<number>>;
  /**
   * React.Dispatch function for set left state
   */
  setLeft: React.Dispatch<React.SetStateAction<number>>;
  /**
   * max width to which you can stretch
   */
  maxWidth?: number;
  /**
   * max height to which you can stretch
   */
  maxHeight?: number;
  /**
   * min width to which you can stretch
   */
  minWidth?: number;
  /**
   * min height to which you can stretch
   */
  minHeight?: number;
  /**
   * toggle of resizable component state
   */
  isResizable: boolean;
}

/**
 * @description hook makes an component resizable. Value of props in PX.
 */
export const useResizable = ({
  minWidth = 0,
  minHeight = 0,
  ...props
}: UseResizableProps) => {
  const [oldCursorPosition, setOldCursorPosition] = useState({ X: 0, Y: 0 });
  const [hasResizeStart, setHasResizeStart] = useState(false);
  const [hasResize, setHasResize] = useState(false);
  const [hasResizeEnd, setHasResizeEnd] = useState(false);

  /**
   * @description makes element is dragged area for resize
   * @param
   * @param isMouseEvents toggle for choice what is use: mouse events or DnD
   * @param isResizable toggle of resizable drag area state
   */
  const createDragResize = ({
    direction = Direction.BottomRight,
    isMouseEvents = false,
    isResizable = true
  }: {
    direction: Direction;
    isMouseEvents: boolean;
    isResizable: boolean;
  }) => {
    let getWidth: Function;
    let getHeight: Function;
    let getTop: Function;
    let getLeft: Function;
    if (
      direction === Direction.Left ||
      direction === Direction.TopLeft ||
      direction === Direction.BottomLeft
    ) {
      getLeft = (l: number) => l;
      getWidth = (w: number) => -w;
    }
    if (
      direction === Direction.Right ||
      direction === Direction.TopRight ||
      direction === Direction.BottomRight
    ) {
      getWidth = (w: number) => w;
    }
    if (
      direction === Direction.Top ||
      direction === Direction.TopLeft ||
      direction === Direction.TopRight
    ) {
      getTop = (t: number) => t;
      getHeight = (h: number) => -h;
    }
    if (
      direction === Direction.Bottom ||
      direction === Direction.BottomLeft ||
      direction === Direction.BottomRight
    ) {
      getHeight = (h: number) => h;
    }

    const dragHandler =
      isResizable && props.isResizable
        ? (
            event: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
          ) => {
            if (hasResizeStart) {
              if (event.buttons === 0) dragEndHandler();
              else {
                setHasResize(true);
                if (event.clientX !== 0 && event.clientY !== 0) {
                  const w =
                    props.width + getWidth(event.clientX - oldCursorPosition.X);
                  const h =
                    props.height +
                    getHeight(event.clientY - oldCursorPosition.Y);
                  if (
                    w >= minWidth &&
                    (props.maxWidth === undefined || w <= props.maxWidth)
                  ) {
                    props.setWidth(w);
                    props.setLeft(
                      props.left + getLeft(event.clientX - oldCursorPosition.X)
                    );
                  }
                  if (
                    h >= minHeight &&
                    (props.maxHeight === undefined || h <= props.maxHeight)
                  ) {
                    props.setHeight(h);
                    props.setTop(
                      props.top + getTop(event.clientY - oldCursorPosition.Y)
                    );
                  }

                  setOldCursorPosition({ X: event.clientX, Y: event.clientY });
                }
              }
            }
          }
        : () => {
            return;
          };

    const dragStartHandler =
      isResizable && props.isResizable
        ? (
            event:
              | React.MouseEvent<HTMLDivElement, MouseEvent>
              | DragEvent<Element>
          ) => {
            setHasResizeEnd(false);
            setHasResizeStart(true);
            setOldCursorPosition({ X: event.clientX, Y: event.clientY });
          }
        : () => {
            return;
          };

    const dragEndHandler =
      isResizable && props.isResizable
        ? () => {
            setHasResizeStart(false);
            setHasResize(false);
            setHasResizeEnd(true);
          }
        : () => {
            return;
          };

    return isMouseEvents
      ? {
          onMouseDown: dragStartHandler,
          onMouseMove: dragHandler,
          onMouseUp: dragEndHandler
        }
      : {
          draggable: isResizable && props.isResizable,
          onDrag: dragHandler,
          onDragStart: (event: DragEvent<Element>) => {
            event.dataTransfer.setDragImage(new Image(), 0, 0);
            dragStartHandler(event);
          },
          onDragEnd: dragEndHandler
        };
  };

  return [createDragResize, hasResizeStart, hasResize, hasResizeEnd ] as const;
};

export default useResizable;
