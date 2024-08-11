import "./App.css";
import { darkTheme } from "./theming/DarkTheme";
import { ThemeProvider } from "@mui/material";
import { BillTransformer } from "./containers/billTransformer";
import { BillController } from "./containers/BillController";
import { BillContext, useBillContext } from "./businessLogic/billState";

export default function App() {
  const billContext = useBillContext();

  return (
    <ThemeProvider theme={darkTheme}>
      <BillContext.Provider value={billContext}>
        {billContext.isBillLoaded ? <BillController /> : <BillTransformer />}
      </BillContext.Provider>
    </ThemeProvider>
  );
}
