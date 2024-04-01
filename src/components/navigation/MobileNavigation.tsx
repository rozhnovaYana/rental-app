import React from "react";
import Link from "next/link";

import { type NavItem } from "@/components/navigation/Navbar";
import AuthButton from "@/components/navigation/AuthButton";

type MobileNavigationProps = { pathname: string; navItems: NavItem[] };

const MobileNavigation = ({ pathname, navItems }: MobileNavigationProps) => {
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

        <AuthButton />
      </div>
    </div>
  );
};
export default MobileNavigation;
