import { Property } from "@/types/property";
import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
} from "react-share";

type SharePropertyButtonsProps = {
  id: string;
  type: string;
};

const SharePropertyButtons = ({ id, type }: SharePropertyButtonsProps) => {
  const propertyUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${id}`;
  return (
    <div>
      <h3 className="text-white text-center font-bold pt-2">
        Share your ptoperty
      </h3>
      <div className="flex justify-center pt-5 gap-3">
        <EmailShareButton
          url={propertyUrl}
          subject={`Share the Rental property`}
        >
          <EmailIcon size={30} round={true} />
        </EmailShareButton>
        <FacebookShareButton
          url={propertyUrl}
          hashtag={`${type?.replace(/\s/g, "")}`}
        >
          <FacebookIcon size={30} round={true} />
        </FacebookShareButton>
        <LinkedinShareButton
          source="Rental App"
          url={propertyUrl}
          title={`Share ${type}`}
        >
          <LinkedinIcon size={30} round={true} />
        </LinkedinShareButton>
        <TelegramShareButton url={propertyUrl} title={`Share ${type}`}>
          <TelegramIcon size={30} round={true} />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default SharePropertyButtons;
