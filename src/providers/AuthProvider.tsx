import React, { useEffect } from "react";
import useActions from "hooks/useActions";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { verify } = useActions();

  useEffect(() => {
    verify();
  }, []);

  return <>{children}</>;
};
