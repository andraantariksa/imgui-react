import { Text } from "./text";

export type CheckboxProps = {
  label?: string;
}

export const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <div className="flex flex-row">
      <input className="accent-[#20324d] w-6 h-6" type="checkbox"/>
      <Text>{ label }</Text>
    </div>
  );
}
