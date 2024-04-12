import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const InputWrapper = ({ children }: Props) => {
  return <div className="mt-8">{children}</div>;
};

export default InputWrapper;
