import './App.css'
import {BillController} from "./containers/BillController";
import {darkTheme} from "./theming/DarkTheme";
import {ThemeProvider} from "@mui/material";


export default function App() {

    return (
        <ThemeProvider theme={darkTheme}>
        <BillController/>
        </ThemeProvider>
    );
}
