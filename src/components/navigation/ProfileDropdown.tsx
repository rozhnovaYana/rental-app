import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

import Button from "@/components/UI/Button";

const profileItems = [
  {
    title: "Your Profile",
    href: "/profile",
    id: "user-menu-item-0",
  },
  {
    title: "Saved Properties",
    href: "/properties",
    id: "user-menu-item-2",
  },
  {
    title: "Sign Out",
    id: "user-menu-item-2",
    onClick: () => {
      signOut();
    },
  },
];
const ProfileDropdown = ({ closeDropdown }: { closeDropdown: () => void }) => {
  return (
    <div
      id="user-menu"
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex={-1}
    >
      {profileItems.map(({ title, href, id, onClick }) => (
        <Button
          element={href ? Link : "button"}
          key={id}
          href={href}
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id={id}
          onClick={() => {
            closeDropdown();
            onClick && onClick();
          }}
        >
          {title}
        </Button>
      ))}
    </div>
  );
};

export default ProfileDropdown;
