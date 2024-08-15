import "./App.css";
import {darkTheme} from "./theming/DarkTheme";
import {ThemeProvider} from "@mui/material";
import {BillTransformer} from "./containers/billTransformer";
import {SplittingController} from "./containers/splittingController";
import React from "react";
import {BillContextProvider} from "./businessLogic/billState/billContext.tsx";

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BillContextProvider>
          {context => context.isBillLoaded ? <SplittingController /> : <BillTransformer />}
      </BillContextProvider>
    </ThemeProvider>
  );
}
