import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { AppContextProvider } from "./AppContext";
import theme from "./theme";
import "typeface-roboto";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <AppContextProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </AppContextProvider>,
  document.getElementById("root")
);
