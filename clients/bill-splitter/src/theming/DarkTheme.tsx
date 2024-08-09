import {createTheme} from "@mui/material";
import {BaseTheme} from "./Base";

export const darkTheme = createTheme(
    {
        ...BaseTheme,
        components: {
            MuiTable: {
                styleOverrides: {
                    root: {
                        padding: '0',
                        margin: '0',
                    }
                }
            }
        },
        palette: {
            mode: 'dark',
        },
    }
);