// hooks/useThemeData.ts
import { useState } from "react";

export const useThemeData = () => {
  const [darkMode, setDarkMode] = useState(false);
  return {
    darkMode,
    toggleTheme: () => setDarkMode((prev) => !prev),
  };
};
