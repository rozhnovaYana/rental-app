import React, { ReactNode } from "react";
import Link, { type LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps {
  children: ReactNode;
  type?: "reverse";
  className?: string;
}

const LinkButton = ({ children, href, type, className }: LinkButtonProps) => {
  const textColor = !!type ? "black" : "white";
  const buttonColor = !!type ? "white" : "black";
  const hoverState = !!type ? "!bg-foreground" : "bg-gray-900";

  return (
    <Link
      href={href}
      className={`bg-${buttonColor} text-${textColor} hover:${hoverState} px-4 py-2 rounded-lg text-center text-sm transition-background ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
