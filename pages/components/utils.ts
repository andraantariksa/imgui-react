import { ChangeEventHandler } from "react";

export const stopPropagation: ChangeEventHandler<any> = (event) => event.stopPropagation();
