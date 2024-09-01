import "./App.css";
import { darkTheme } from "./theming/DarkTheme";
import { ThemeProvider } from "@mui/material";
import { BillTransformer } from "./containers/billTransformer";
import { SplittingController } from "./containers/splittingController";
import { BillProvider } from "ez-split-logic";

import "./i18n/config";

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <BillProvider>
                {(context) =>
                    context.isBillLoaded ? <SplittingController /> : <BillTransformer />
                }
            </BillProvider>
        </ThemeProvider>
    );
}
