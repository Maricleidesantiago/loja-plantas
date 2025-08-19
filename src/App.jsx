import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Paper, Button as MuiButton } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme";
import PlantStorage from "./pages/PlantStorage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => setDarkMode(prev => !prev);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper elevation={0} style={{ minHeight: "100vh" }}>
        <MuiButton
          variant="contained"
          color="primary"
          onClick={handleThemeToggle}
          style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}
        >
          {darkMode ? "Modo Claro ☀️" : "Modo Escuro 🌙"}
        </MuiButton>

        <PlantStorage />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
