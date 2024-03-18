import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonType<T extends ElementType> = {
  element: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType>({
  element,
  children,
  ...props
}: ButtonType<T>) => {
  const Button: ElementType = element || "div";
  return <Button {...props}>{children}</Button>;
};

export default Button;
