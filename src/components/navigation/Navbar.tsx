"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaGoogle } from "react-icons/fa";
import logo from "@/assets/images/logo-white.png";

import { BurgerIcon } from "@/components/icons/Icons";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import Profile from "@/components/navigation/Profile";

export type NavItem = {
  title: string;
  href: string;
  id: string;
};
const getNavItems = (isLogged: boolean): NavItem[] => {
  const navItems = [
    { title: "Home", href: "/", id: "0" },
    { title: "Properties", href: "/properties", id: "1" },
  ];
  return isLogged
    ? [...navItems, { title: "Add Property", href: "/properties/add", id: "2" }]
    : navItems;
};

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileNabigationVisible, setMobileNavigation] = useState(false);

  // tempopary auth
  const [isLogged, setLogged] = useState(false);
  const navItems = getNavItems(isLogged);
  return (
    <nav className="bg-gray-400 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileNavigation((prev) => !prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <BurgerIcon />
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                PropertyPulse
              </span>
            </Link>
            <DesktopNavigation pathname={pathname} navItems={navItems} />
          </div>

          {isLogged ? (
            <Profile />
          ) : (
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  <FaGoogle className=" text-white mr-2" />
                  <span>Login or Register</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {isMobileNabigationVisible && (
        <MobileNavigation pathname={pathname} navItems={navItems} />
      )}
    </nav>
  );
};
export default Navbar;
