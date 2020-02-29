import { useState, DragEvent } from "react";

export interface UseMovableProps {
  /**
   * left component property
   */
  left: number;
  /**
   * top component property
   */
  top: number;
  /**
   * React.Dispatch function for set left state
   */
  setLeft: React.Dispatch<number>;
  /**
   * React.Dispatch function for set top state
   */
  setTop: React.Dispatch<number>;
  /**
   * toggle of movable component state
   */
  isMovableComponent?: boolean;
}

/**
 * @description hook makes an component moveable and/or draggable
 * @param left left component property
 * @param top top component property
 * @param setLeft React.Dispatch function for set left state
 * @param setTop React.Dispatch function for set top state
 * @param isMovableComponent toggle of movable component state
 */
export const useMovable = (props: UseMovableProps) => {
  const [oldPositionMove, setOldPositionMove] = useState({ left: 0, top: 0 });
  const [hasMove, setHasMove] = useState(false);
  const [hasMoveStart, setHasMoveStart] = useState(false);
  const [hasMoveEnd, setHasMoveEnd] = useState(false);

  /**
   * @description makes element is dragged area for move
   * @param isMouseEvents toggle for choice what is use: mouse events or DnD
   * @param isMovable toggle of movable drag area state
   * @param isAxisX toggle of drag in X axis
   * @param isAxisY toggle of drag in Y axis
   */
  const createDragMove = ({
    isMouseEvents = false,
    isMovable = true,
    isAxisX = true,
    isAxisY = true
  }: {
    isMouseEvents?: boolean;
    isMovable?: boolean;
    isAxisX?: boolean;
    isAxisY?: boolean;
  }) => {
    const dragHandler =
      isMovable && props.isMovableComponent
        ? (e: MouseEvent) => {
            if (hasMoveStart) {
              if (e.buttons === 0) dragEndHandler();
              else {
                setHasMove(true);
                if (e.clientY !== 0 && e.clientX !== 0) {
                  if (isAxisX) props.setLeft(e.clientX - oldPositionMove.left);
                  if (isAxisY) props.setTop(e.clientY - oldPositionMove.top);
                }
              }
            }
          }
        : () => {
            return;
          };

    const dragStartHandler =
      isMovable && props.isMovableComponent
        ? (e: MouseEvent | DragEvent) => {
            window.addEventListener("mousemove", dragHandler);
            setHasMoveEnd(false);
            setHasMoveStart(true);
            setOldPositionMove({
              left: e.clientX - props.left,
              top: e.clientY - props.top
            });
          }
        : () => {
            return;
          };

    const dragEndHandler =
      isMovable && props.isMovableComponent
        ? () => {
            window.removeEventListener("mousemove", dragHandler);
            setHasMove(false);
            setHasMoveStart(false);
            setHasMoveEnd(true);
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
          draggable: isMovable && props.isMovableComponent,
          onDrag: dragHandler,
          onDragStart: (e: DragEvent) => {
            e.dataTransfer.setDragImage(new Image(), 0, 0);
            dragStartHandler(e);
          },
          onDragEnd: dragEndHandler
        };
  };

  return [createDragMove, { hasMove, hasMoveStart, hasMoveEnd }];
};

export default useMovable;
