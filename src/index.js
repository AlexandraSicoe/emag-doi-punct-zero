import { CssVarsProvider, extendTheme, useColorScheme } from "@mui/joy/styles";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import { createTheme } from "@mui/material";
import MenuFooterLayout from "./layouts/MenuFooterLayout";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout";
import TestPage from "./pages/TestPage";
import { useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
export default function App() {
  const { mode, setMode } = useColorScheme();
  setMode("light");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegisterLayout />}>
          <Route path="/administrare" element={<LoginRegisterPage />} />
          <Route path="/pass-reset" element={<PasswordResetPage />} />
        </Route>

        <Route path="/" element={<MenuFooterLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const MUItheme = createTheme();
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "50": "#f5f3ff",
          "100": "#ede9fe",
          "200": "#ddd6fe",
          "300": "#c4b5fd",
          "400": "#a78bfa",
          "500": "#8b5cf6",
          "600": "#7c3aed",
          "700": "#6d28d9",
          "800": "#5b21b6",
          "900": "#4c1d95",
        },
        neutral: {
          "50": "#f8f9fa",
          "100": "#f1f3f5",
          "200": "#e9ecef",
          "300": "#dee2e6",
          "400": "#ced4da",
          "500": "#adb5bd",
          "600": "#868e96",
          "700": "#495057",
          "800": "#343a40",
          "900": "#212529",
        },
        action: {
          active: "rgba(0,0,0,0.54)",
          hover: "rgba(0,0,0,0.04)",
          hoverOpacity: 0.04,
          selected: "rgba(0,0,0,0.08)",
          selectedOpacity: 0.08,
          disabled: "rgba(0,0,0,0.26)",
          disabledBackground: "rgba(0,0,0,0.12)",
          disabledOpacity: 0.38,
          focus: "rgba(0,0,0,0,0.12)",
          focusOpacity: 0.12,
          activatedOpacity: 0.12,
        },
      },
      transitions: {
        create: MUItheme.transitions.create,
        duration: MUItheme.transitions.duration,
        easing: MUItheme.transitions.easing,
      },
      typography: {
        pxToRem: MUItheme.typography.pxToRem,
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#FB761F",
          100: "#FB761F",
          200: "#FB761F",
          300: "#FB761F",
          400: "#FB761F",
          500: "#ffffff",
          600: "#FB761F",
          700: "#FB761F",
          800: "#FB761F",
          900: "#FB761F",
        },
        secondary: {
          50: "#fb761f",
          100: "#fb761f",
          200: "#fb761f",
          300: "#fb761f",
          400: "#fb761f",
          500: "#fb761f",
          600: "#fb761f",
          700: "#fb761f",
          800: "#fb761f",
          900: "#fb761f",
        },
      },
    },
  },
  fontFamily: {
    body: "Poppins",
    display: "Poppins",
  },
});
root.render(
  <CssVarsProvider theme={theme}>
    <App />
  </CssVarsProvider>
);
