import React, { useContext } from "react";
import { ThemeContext } from "./provider/ThemeContext";

const Child = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <div>Child Component Current Theme: {theme}</div>

      <button
        onClick={() => {
          setTheme(theme == "light" ? "dart" : "light");
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Child;
