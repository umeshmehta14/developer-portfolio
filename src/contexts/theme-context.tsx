import * as React from "react";
import { useState } from "react";
import { theDarkTheme, theLightTheme } from "../theme/theme";
import { ThemeDataType } from "../types";

interface ValuesTypes {
  theme: ThemeDataType;
  drawerOpen: boolean;
  setHandleDrawer: () => void;
  changeTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = React.createContext<ValuesTypes | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(theDarkTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDark, setDark] = useState(true);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const changeTheme = () => {
    if (isDark) {
      setTheme(theLightTheme);
      setDark(false);
    } else {
      setTheme(theDarkTheme);
      setDark(true);
    }
  };

  const value: ValuesTypes = {
    theme,
    drawerOpen,
    setHandleDrawer,
    changeTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
