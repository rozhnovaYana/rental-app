import React from "react";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@nextui-org/react";

const SubmitButton = ({ children, color, ...props }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={
        !color
          ? `bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline`
          : ""
      }
      type="submit"
      disabled={pending}
      isLoading={pending}
      color={color}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
