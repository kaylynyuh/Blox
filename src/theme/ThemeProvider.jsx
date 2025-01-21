import React, { createContext } from "react";
import _merge from "lodash/merge";

import { theme as defaults } from "./index";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, theme }) => {
  const appTheme = _merge(defaults, theme);
  console.log(appTheme);
  return (
    <ThemeContext.Provider value={appTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
