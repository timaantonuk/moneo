import React from "react";
import AppRoutes from "./AppRoutes";
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark', // Set the mode to dark
        background: {
            default: '#101214',
            paper: '#1e1e1e',    // Custom background for Paper components
        },
        primary: {
            main: '#0288d1',      // Custom primary color
        },
        secondary: {
            main: '#8e24aa',      // Custom secondary color
        },
        text: {
            primary: '#dadada'
        }
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <AppRoutes />
            </div>
         </ThemeProvider>
    );
};

export default App;
