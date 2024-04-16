import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

const SubmitButton = ({ children }: { children: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
      type="submit"
      disabled={pending}
      isLoading={pending}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
