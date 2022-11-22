import { ChangeEventHandler, useCallback, useState } from "react";
import { stopPropagation } from "./utils";

export type NumberSliderProps = {
  isFloat: boolean;
  initialValue?: number;
  step?: number;
  max: number;
  min: number;
}

export const NumberSlider = ({ isFloat, initialValue, max, min, step = (max - min) / 1000.0 }: NumberSliderProps) => {
  const [value, setValue] = useState(initialValue || min);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    // @ts-ignore
    setValue(event.target.value);
  }, []);

  return <div>
    <input style={ { position: 'absolute' } } type="range" min={ min } max={ max } step={ step } value={ value }
           onChange={ onChange }
           onMouseMove={ stopPropagation }/>
    <p style={ { position: 'absolute', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto' } }>{ value }</p>
  </div>
}
