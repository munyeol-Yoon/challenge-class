"use client";

import { User } from "@supabase/supabase-js";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "./supabase.context";

type AuthContextValue = {
  isInitialized: boolean;
  isLoggedIn: boolean;
  user?: User | null;
};

const initialValue = {
  isInitialized: false,
  isLoggedIn: false,
  user: null,
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [user, setUser] = useState<AuthContextValue["user"]>(null);
  const isLoggedIn = !!user;

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);

      if (event === "INITIAL_SESSION") {
        // handle initial session
        setUser(session?.user || null);
      } else if (event === "SIGNED_IN") {
        // handle sign in event
        setUser(session!.user);
      } else if (event === "SIGNED_OUT") {
        // handle sign out event
        setUser(null);
      } else if (event === "PASSWORD_RECOVERY") {
        // handle password recovery event
      } else if (event === "TOKEN_REFRESHED") {
        // handle token refreshed event
      } else if (event === "USER_UPDATED") {
        // handle user updated event
        setUser(session!.user);
      }

      setIsInitialized(true);
    });
  }, []);

  const value = { isLoggedIn, user, isInitialized };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
