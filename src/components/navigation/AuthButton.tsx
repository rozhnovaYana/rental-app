import React, { ReactNode, useState, useEffect } from "react";
import {
  signIn,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import { type BuiltInProviderType } from "next-auth/providers/index";

type AuthButtonProps = {
  children?: ReactNode;
};

const AuthButton = ({ children }: AuthButtonProps) => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <>
      {providers &&
        Object.keys(providers).map((provider, index) => (
          <button
            key={index}
            onClick={() => signIn(provider)}
            className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
          >
            {children}
            <span>Login or Register</span>
          </button>
        ))}
    </>
  );
};

export default AuthButton;
