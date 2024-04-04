"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <NextUIProvider className="min-h-screen flex flex-col">
        {children}
      </NextUIProvider>
    </SessionProvider>
  );
};

export default Provider;
