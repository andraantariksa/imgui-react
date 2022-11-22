import React, { useRef, useState, useEffect, useCallback, ReactElement, ReactNode } from 'react'

export type DraggableProps = {
  children?: ReactNode;
}

export const Draggable = ({ children }: DraggableProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

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
      style={ {} }
      onMouseDown={ onMouseDown }>
      { children }
    </div>
  )
}

export type WindowProps = {
  children?: ReactNode;
  title?: string;
}

export const Window = ({ children, title }: WindowProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  return <Draggable>
    <div style={ { minWidth: 200, width: 200, color: 'white' } }>
      <div className="toolbar" style={ {
        backgroundColor: isMinimized ? 'rgba(0, 0, 0, 0.5)' : 'black',
        display: 'flex',
        flexDirection: 'row',
        height: 35,
        alignItems: 'center'
      } }>
        <button onClick={ () => setIsMinimized(!isMinimized) }>A</button>
        <h2 style={ { fontSize: 17, fontWeight: 'normal' } }>{ title }</h2>
      </div>
      { !isMinimized && <div style={ { backgroundColor: 'rgba(0, 0, 0, 0.7)', width: 'auto', height: '100%' } }>
        { children }
      </div> }
    </div>
  </Draggable>;
}
