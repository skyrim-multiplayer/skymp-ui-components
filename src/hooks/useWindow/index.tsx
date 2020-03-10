import { useState } from "react";
import useMovable from "../useMovable";
import { useResizable, Direction } from "../useResizable";

export { Direction };

export interface UseWindowProps {
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
   * initial left component property
   */
  left: number;
  /**
   *  toggle of movable component state
   */
  isMovable?: boolean;
  /**
   * toggle of resizable component state
   */
  isResizable?: boolean;
  /**
   * max width component property
   */
  maxWidth?: number;
  /**
   * max height component property
   */
  maxHeight?: number;
  /**
   * min width component property
   */
  minWidth?: number;
  /**
   * min height component property
   */
  minHeight?: number;
}

/**
 * @description hook makes a component is window
 */
export const useWindow = ({
  isMovable = false,
  isResizable = false,
  minWidth = 0,
  minHeight = 0,
  ...props
}: UseWindowProps) => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [top, setTop] = useState(props.top);
  const [left, setLeft] = useState(props.left);

  const [createDragMove, hasMove, hasMoveStart, hasMoveEnd] = useMovable({
    left,
    top,
    setLeft,
    setTop,
    isMovable
  });

  const [
    createDragResize,
    hasResizeStart,
    hasResize,
    hasResizeEnd
  ] = useResizable({
    width,
    height,
    top,
    left,
    setWidth,
    setHeight,
    setTop,
    setLeft,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
    minWidth,
    minHeight,
    isResizable
  });

  return {
    createDragMove,
    hasMoveStart,
    hasMove,
    hasMoveEnd,
    createDragResize,
    hasResizeStart,
    hasResize,
    hasResizeEnd,
    width,
    height,
    top,
    left,
    setWidth,
    setHeight,
    setTop,
    setLeft
  } as const;
};

export default useWindow;
