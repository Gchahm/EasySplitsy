import {createTheme} from "@mui/material";
import {BaseTheme} from "./Base";

export const darkTheme = createTheme(
    {
        ...BaseTheme,
        palette: {
            ...BaseTheme.palette,
            mode: 'dark',
            background: {
                paper: '#242424',
                default: '#1b1b1b',
            },
            divider: '#1b1b1b',
        },
        components: {
            MuiTable: {
                styleOverrides: {
                    root: {
                        borderRadius: 12
                    }
                }
            }
        },
    }
);