import './App.css'
import {darkTheme} from "./theming/DarkTheme";
import {ThemeProvider} from "@mui/material";
import {BillTransformer} from "./containers/billTransformer";
import {BillController} from "./containers/BillController";
import {BillContext, useBillContext} from "./businessLogic/billState";
import * as React from "react";

export default function App() {
    const billContext = useBillContext();

    React.useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            console.log("App loaded");
        } else {
            console.log("App loaded in production");
        }
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <BillContext.Provider value={billContext}>
                {billContext.isBillLoaded ? <BillController/> : <BillTransformer/>}
            </BillContext.Provider>
        </ThemeProvider>
    );
}
