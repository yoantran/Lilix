import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

export const themeLight = createTheme({
    palette: {
        background: {
            default: "#e4f0e2"
        }
    }
});

export const themeBlack = createTheme({
    palette: {
        background: {
            default: "#000000"
        },
        text: {
            default: "#ffffff"
        }
    }
})

export const themeDark = createTheme({
    palette: {
        background: {
            default: "#3E3737"
        },
        text: {
            primary: "#ffffff"
        }
    }
});