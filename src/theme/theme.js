// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

// 🎨 Tema Claro
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c2a39a",
    },
    secondary: {
      main: "#e1d1c8",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});

// 🌙 Tema Escuro
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#001600",
    },
    secondary: {
      main: "#0a3007",
    },
    background: {
      default: "#0a3007",
      paper: "#001600",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
