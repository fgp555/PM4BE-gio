"use client";
import { userSessionProps } from "@/interfaces/IAuth";
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  dataUser: userSessionProps | null;
  setDataUser: (userData: userSessionProps | null) => void;
  updateCart: () => void;
  cartItemCount: number;
}

const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  updateCart: () => {},
  cartItemCount: 0,
});

interface AuthProviderProps {
  children: React.ReactElement;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<userSessionProps | null>(null);
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("userSession", JSON.stringify(userData));
    }
  }, [userData]);

  // src/context/AuthContext.tsx

  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItemCount(cart.length);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const data = localStorage.getItem("userSession");
      setUserData(JSON.parse(data!));
    }
    updateCart();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        dataUser: userData,
        setDataUser: setUserData,
        updateCart,
        cartItemCount,
        //
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
