import React from "react";
import { Input, InputProps } from "@nextui-org/react";

interface Props extends InputProps {
  id: string;
  name: string;
  type?: string;
}

const CustomInput = ({ id, name, type = "text", ...props }: Props) => {
  return (
    <div className="mb-4">
      <Input
        id={id}
        name={name}
        type={type}
        radius="md"
        variant="bordered"
        classNames={{
          input: "capitalize",
          label: "text-gray-700 font-bold block capitalize",
        }}
        labelPlacement="outside"
        isClearable
        {...props}
      />
    </div>
  );
};

export default CustomInput;
