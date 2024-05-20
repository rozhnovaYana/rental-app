import React, { ReactNode } from "react";
import LinkButton from "../UI/LinkButton";

type InfoBoxProps = {
  header: string;
  children: ReactNode;
  buttonInfo: {
    link: string;
    title: string;
  };
  stylesType?: "reverse";
};

const InfoBox = ({
  header,
  children,
  buttonInfo: { link, title },
  stylesType,
}: InfoBoxProps) => {
  const main_color = "black";
  const contrast_color = "white";
  return (
    <div
      className={`${
        !!stylesType ? `bg-${main_color}` : `bg-${contrast_color}`
      } ${
        !!stylesType ? `text-${contrast_color}` : `text-${main_color}`
      } p-6 rounded-lg shadow-md`}
    >
      <h2 className="text-2xl font-bold">{header}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <LinkButton href={link} type={!!stylesType ? "reverse" : undefined}>
        {title}
      </LinkButton>
    </div>
  );
};

export default InfoBox;
