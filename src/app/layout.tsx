import React, { ReactNode } from "react";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import "@/assets/styles/global.sass";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import Provider from "@/app/Provider";

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
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
};

export default MainLayout;
