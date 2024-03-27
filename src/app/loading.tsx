import { Spinner } from "@nextui-org/react";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner size="lg" color="default" />
    </div>
  );
};

export default loading;
