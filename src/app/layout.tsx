import React, { ReactNode } from "react";
import { Metadata } from "next";

import "@/assets/styles/global.sass";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import Provider from "./Provider";

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
      <body>
        <Provider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default MainLayout;
