import './App.css'
import {darkTheme} from "./theming/DarkTheme";
import {ThemeProvider} from "@mui/material";
import {BillTransformer} from "./containers/billTransformer";


export default function App() {


    return (
        <ThemeProvider theme={darkTheme}>
            <BillTransformer/>
            {/*<BillController/>*/}
        </ThemeProvider>
    );
}
