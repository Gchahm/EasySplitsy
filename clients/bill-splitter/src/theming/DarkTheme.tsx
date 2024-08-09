import {createTheme} from "@mui/material";

export const darkTheme = createTheme(
    {
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