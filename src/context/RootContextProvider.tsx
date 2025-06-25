// providers/RootProvider.tsx
"use client";

import { ReactNode } from "react";
import { GlobalProvider } from "./GlobalContext";
import { useAuthData } from "./hooks/UseAuthData";
import { useThemeData } from "./hooks/UseThemeData";

export default function RootContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const auth = useAuthData();
  const theme = useThemeData();

  return <GlobalProvider value={{ auth, theme }}>{children}</GlobalProvider>;
}
