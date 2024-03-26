import React, { ReactNode } from "react";

type InfoBoxProps = {
  header: string;
  children: ReactNode;
  buttonInfo: {
    link: string;
    buttonBg?: string;
    title: string;
  };
  textColor?: string;
  bgColor?: string;
};

const InfoBox = ({
  header,
  children,
  buttonInfo: { link, buttonBg = "bg-black", title },
  textColor = "text-white",
  bgColor = "bg-gray-100",
}: InfoBoxProps) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{header}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <a
        href={link}
        className={`inline-block ${buttonBg} ${textColor} rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {title}
      </a>
    </div>
  );
};

export default InfoBox;
