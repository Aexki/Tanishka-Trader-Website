import { PageLayout } from "./components/pageLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
    const THEME = createTheme({
        typography: {
            fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif, "Poiret One", "Raleway", cursive`,
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
        },
    });

    return (
        <ThemeProvider theme={THEME}>
            <div className="App">
                <PageLayout> </PageLayout>{" "}
            </div>{" "}
        </ThemeProvider>
    );
}

export default App;
