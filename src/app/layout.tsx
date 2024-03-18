import { Metadata } from "next";
import React, { ReactNode } from "react";
import "@/assets/styles/global.sass";

type Props = {
  children: ReactNode;
};
export const metadata: Metadata = {
  title: "Rental App | Find your favourite appartment",
  description: "Find your favourite appartment",
  keywords: "rental, rent, appartment",
};

const MainLayout = ({ children }: Props) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
