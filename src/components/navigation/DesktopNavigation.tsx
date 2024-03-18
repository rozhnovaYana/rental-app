import Link from "next/link";
import React from "react";
import { navItems } from "./Navbar";

type Props = { pathname: string };

const DesktopNavigation = ({ pathname }: Props) => {
  return (
    <div className="hidden md:ml-6 md:block">
      <div className="flex space-x-2">
        {navItems.map(({ title, href, id }) => (
          <Link
            key={id}
            href={href}
            className={`text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ${
              pathname === href ? "bg-black" : null
            } `}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
