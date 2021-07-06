import React, { useState, useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { useSelector } from "react-redux";
import App from "./containers/App";

function ThemeApp() {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const lang = useSelector(state => state.lang);
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    setDirection('ltr');
  }, [lang]);

  const theme = createMuiTheme({
    direction: direction,
    palette: {
      primary: {
        main: "#1976d2"
      },
      secondary: {
        main: "#ac4556"
      }
    }
  });
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default ThemeApp;
