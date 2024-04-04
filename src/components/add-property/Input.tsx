import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id: string;
  name: string;
  placeholder?: string;
};

const Input = ({
  id,
  name,
  placeholder,
  type = "text",
  ...props
}: InputProps) => {
  return (
    <input
      id={id}
      name={name}
      className={`border w-full rounded py-2 px-3 ${
        type === "text" ? "mb-2" : ""
      }`}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
