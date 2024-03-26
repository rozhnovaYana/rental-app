import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";
import { NotificationIcon } from "@/components/icons/Icons";
import ProfileDropdown from "@/components/navigation/ProfileDropdown";

const Profile = () => {
  const [isProfileDropdownVisible, setProfileDropdown] = useState(false);
  return (
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
          2{/* <!-- Replace with the actual number of notifications --> */}
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
  );
};

export default Profile;
