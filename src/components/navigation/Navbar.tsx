"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaGoogle } from "react-icons/fa";
import logo from "@/assets/images/logo-white.png";
import profileDefault from "@/assets/images/profile.png";

import { BurgerIcon, NotificationIcon } from "@/components/icons/Icons";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import ProfileDropdown from "@/components/navigation/ProfileDropdown";

export const navItems = [
  { title: "Home", href: "/", id: 0 },
  { title: "Properties", href: "/properties", id: 1 },
  { title: "Add Property", href: "/properties/add", id: 2 },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileNabigationVisible, setMobileNavigation] = useState(false);
  const [isProfileDropdownVisible, setProfileDropdown] = useState(false);
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
            <Link
              className="flex flex-shrink-0 items-center"
              href="/index.html"
            >
              <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />

              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                PropertyPulse
              </span>
            </Link>
            <DesktopNavigation pathname={pathname} />
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          <div className="hidden md:block md:ml-6">
            <div className="flex items-center">
              <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                <FaGoogle className=" text-white mr-2" />
                <span>Login or Register</span>
              </button>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged In) --> */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <Link href="/messages" className="relative group">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <NotificationIcon />
              </button>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                2
                {/* <!-- Replace with the actual number of notifications --> */}
              </span>
            </Link>
            {/* <!-- Profile dropdown button --> */}
            <div className="relative ml-3">
              <div>
                <button
                  onClick={() => setProfileDropdown((prev) => !prev)}
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={profileDefault}
                    alt=""
                  />
                </button>
              </div>
              {isProfileDropdownVisible && <ProfileDropdown />}
            </div>
          </div>
        </div>
      </div>
      {isMobileNabigationVisible && <MobileNavigation pathname={pathname} />}
    </nav>
  );
};
export default Navbar;
