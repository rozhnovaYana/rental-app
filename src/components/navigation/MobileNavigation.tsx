import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { navItems } from "./Navbar";

type Props = { pathname: string };

const MobileNavigation = ({ pathname }: Props) => {
  return (
    <div id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navItems.map(({ title, href, id }) => (
          <Link
            key={id}
            href={href}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              pathname === href
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            } `}
          >
            {title}
          </Link>
        ))}

        <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4">
          <FaGoogle />
          <span>Login or Register</span>
        </button>
      </div>
    </div>
  );
};
export default MobileNavigation;
