import React, { createContext } from "react";
import _merge from "lodash/merge";

import { generateTheme } from "./index";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, theme }) => {
  console.log("appTheme 0: ", theme);
  const appTheme = generateTheme(theme);
  console.log("appTheme 1: ", appTheme);
  return (
    <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>
  );
};
