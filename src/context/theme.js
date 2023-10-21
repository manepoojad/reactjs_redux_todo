import React, { useState } from "react";
export const ThemeContext = React.createContext(null);

export const ThemeContextProvider = ({ Theme, children }) => {
  const ThemeFromLocalStorage = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";
  const [theme, changeThemeState] = useState(ThemeFromLocalStorage);
  const changeTheme = (value) => {
    localStorage.setItem("theme", value);
    changeThemeState(value);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
