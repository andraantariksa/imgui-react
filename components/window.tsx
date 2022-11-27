import React, { ReactNode, useState } from 'react'
import { Draggable } from "./utils/draggable";
import { Position } from "./utils";

export type PressableMenuBarItem = {
  onClick: () => void,
};

export type MenuBarItem = {
  name: string;
} & PressableMenuBarItem;

export type MenuBarSection = {
  name: string;
  items: Array<MenuBarItem>;
}

export type WindowProps = {
  children?: ReactNode;
  title?: string;
  menubar?: Array<MenuBarSection>,
  initialPosition?: Position
}

export const Window = ({ children, title, menubar, initialPosition }: WindowProps) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return <Draggable initialPosition={initialPosition}>
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
      { menubar && <div>

      </div> }
      { !isMinimized && <div style={ { backgroundColor: 'rgba(0, 0, 0, 0.7)', width: 'auto', height: '100%' } }>
        { children }
      </div> }
    </div>
  </Draggable>;
}
