"use client";

import { User } from "@supabase/supabase-js";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextValue = {
  isInitialized: boolean;
  isLoggedIn: boolean;
  me: User | null;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  signUp: (email: string, password: string) => void;
};

const initialValue: AuthContextValue = {
  isInitialized: false,
  isLoggedIn: false,
  me: null,
  logIn: () => {},
  logOut: () => {},
  signUp: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isInitialized, setIsInitialized] =
    useState<AuthContextValue["isInitialized"]>(false);
  const [me, setMe] = useState<AuthContextValue["me"]>(null);
  const isLoggedIn = !!me;
  const logIn: AuthContextValue["logIn"] = async (email, password) => {
    if (me) return alert("로그인 되어있음");
    if (!email || !password) return alert("다 적으셈");

    const data = {
      email,
      password,
    };

    const response = await fetch("http://localhost:3000/api/auth/log-in", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const loggedInUser = await response.json();

    setMe(loggedInUser);
  };
  const logOut: AuthContextValue["logOut"] = async () => {
    if (!me) return alert("로그인하고 하셈");

    await fetch("http://localhost:3000/api/auth/log-out", {
      method: "DELETE",
    });

    setMe(null);
  };
  const signUp: AuthContextValue["signUp"] = async (email, password) => {
    if (me) return alert("로그인 되어있음");
    if (!email || !password) return alert("다 적으셈");

    const data = {
      email,
      password,
    };

    const response = await fetch("http://localhost:3000/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const user = await response.json();

    setMe(user);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me").then(async (res) => {
      if (res.status === 200) {
        const {
          data: { user },
        } = await res.json();
        setMe(user);
      }
    });

    setIsInitialized(true);
  }, []);

  const value: AuthContextValue = {
    isInitialized,
    me,
    isLoggedIn,
    logIn,
    logOut,
    signUp,
  };

  if (!isInitialized) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
