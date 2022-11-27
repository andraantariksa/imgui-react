import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Position } from "./index";

export type DraggableProps = {
  children?: ReactNode;
  initialPosition?: Position;
}
export const Draggable = ({ children, initialPosition = { x: 0, y: 0 } }: DraggableProps) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current !== null) {
      const element = ref.current;
      element.style.transform = `translate(${ position.x }px, ${ position.y }px)`;
    }
  }, [ref]);

  const onMouseDown = useCallback(
    function (event) {
      const onMouseMove = (event: MouseEvent) => {
        position.x += event.movementX;
        position.y += event.movementY;
        const element = ref.current;
        if (element) {
          element.style.transform = `translate(${ position.x }px, ${ position.y }px)`;
        }
        setPosition(position);
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [position, setPosition, ref]
  );

  return (
    <div
      ref={ ref }
      className="absolute"
      onMouseDown={ onMouseDown }>
      { children }
    </div>
  )
}
