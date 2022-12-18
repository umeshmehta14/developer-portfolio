import { makeStyles } from "@mui/styles";
import * as React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../../../contexts/theme-context";
import { ThemeDataType } from "../../../types";
import "./change-theme.css";

interface ThemeContextType {
  theme: ThemeDataType;
  changeTheme: () => void;
  isDark: boolean;
}

const ChangeTheme = () => {
  const { theme, changeTheme, isDark } =
    React.useContext<ThemeContextType>(ThemeContext);

  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: "1.5rem",
      color: theme.buttonColor,
      "&:hover": {
        transform: "scale(1.08)",
        color: theme.tertiary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className='changeTheme'>
      <button onClick={changeTheme} aria-label='Back to top'>
        {isDark ? (
          <BsFillSunFill className={classes.icon} />
        ) : (
          <BsFillMoonFill className={classes.icon} />
        )}
      </button>
    </div>
  );
};

export default ChangeTheme;
