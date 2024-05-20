import { Select, SelectItem, SelectProps } from "@nextui-org/react";
import React from "react";

interface SelectorProps extends Omit<SelectProps, "children"> {
  arr: ReadonlyArray<string> | string[];
  id: string;
  children?: string;
}

const Selector: React.FC<SelectorProps> = ({ arr, id, ...props }) => {
  return (
    <Select
      id={id}
      name={id}
      variant="bordered"
      labelPlacement="outside"
      classNames={{
        label: "text-white font-bold mb-2 block",
        value: "text-white",
        selectorIcon: "text-white",
      }}
      {...props}
    >
      {arr.map((t) => (
        <SelectItem key={t} value={t}>
          {t}
        </SelectItem>
      ))}
    </Select>
  );
};

export default Selector;
