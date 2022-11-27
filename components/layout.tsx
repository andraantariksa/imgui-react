import { HTMLProps } from "react";
import { DivNode } from "postcss-value-parser";

export type RowProps = HTMLProps<DivNode>;

export const Row = ({ children, ...rest }: RowProps) => {
  // @ts-ignore
  return (<div className="flex flex-row" {...rest}>
    { children }
  </div>);
}
