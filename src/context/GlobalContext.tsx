// context/GlobalContext.tsx
"use client";

import React, { createContext, useContext } from "react";

type GlobalContextType = {
  [key: string]: any;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within GlobalProvider");
  return context;
};

type GlobalProviderProps = {
  children: React.ReactNode;
  value: GlobalContextType;
};

export const GlobalProvider = ({ children, value }: GlobalProviderProps) => {
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
