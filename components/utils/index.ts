import { ChangeEventHandler } from "react";

export const stopPropagation: ChangeEventHandler<any> = (event) => event.stopPropagation();

export type Position = {
  x: number;
  y: number;
}
