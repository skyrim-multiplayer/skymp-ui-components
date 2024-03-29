import { useState, DragEvent } from "react";

export interface UseMovableProps {
  /**
   * initial left component property
   */
  left: number;
  /**
   * initial top component property
   */
  top: number;
  /**
   * React.Dispatch function for set left state
   */
  setLeft: React.Dispatch<React.SetStateAction<number>>;
  /**
   * React.Dispatch function for set top state
   */
  setTop: React.Dispatch<React.SetStateAction<number>>;
  /**
   * toggle of movable component state
   */
  isMovable: boolean;
}

export interface CreateDragMoveArgs {
  isMouseEvents?: boolean;
  isMovable?: boolean;
  isAxisX?: boolean;
  isAxisY?: boolean;
}

/**
 * @description hook makes an component moveable and/or draggable
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
  }: CreateDragMoveArgs) => {
    const dragHandler =
      isMovable && props.isMovable
        ? (
            event: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
          ) => {
            if (hasMoveStart) {
              if (event.buttons === 0) dragEndHandler();
              else {
                setHasMove(true);
                if (event.clientY !== 0 && event.clientX !== 0) {
                  if (isAxisX)
                    props.setLeft(event.clientX - oldPositionMove.left);
                  if (isAxisY)
                    props.setTop(event.clientY - oldPositionMove.top);
                }
              }
            }
          }
        : () => {
            return;
          };

    const dragStartHandler =
      isMovable && props.isMovable
        ? (
            event:
              | React.MouseEvent<HTMLDivElement, MouseEvent>
              | DragEvent<Element>
          ) => {
            window.addEventListener("mousemove", dragHandler);
            setHasMoveEnd(false);
            setHasMoveStart(true);
            setOldPositionMove({
              left: event.clientX - props.left,
              top: event.clientY - props.top
            });
          }
        : () => {
            return;
          };

    const dragEndHandler =
      isMovable && props.isMovable
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
          draggable: isMovable && props.isMovable,
          onDrag: dragHandler,
          onDragStart: (event: DragEvent<Element>) => {
            event.dataTransfer.setDragImage(new Image(), 0, 0);
            dragStartHandler(event);
          },
          onDragEnd: dragEndHandler
        };
  };

  return [createDragMove, hasMove, hasMoveStart, hasMoveEnd] as const;
};

export default useMovable;
