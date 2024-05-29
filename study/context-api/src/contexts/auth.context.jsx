import { createContext, useContext, useState } from "react";

// 1. 만든다 : createContext
const initialValue = { isLoggedIn: false };

export const AuthContext = createContext(initialValue);

// 2. 사용한다: useContext
export const useAuth = () => useContext(AuthContext);

// 3. 범위를 지정해 값을 내려준다.

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
