import { CssVarsProvider, extendTheme, useColorScheme } from "@mui/joy/styles";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
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
import ContactInfo from "./components/ContactInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
export default function App() {
  const { mode, setMode } = useColorScheme();
  setMode("light");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/administrare" element={<LoginRegisterPage />} />
          <Route path="/pass-reset" element={<PasswordResetPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-info" element={<ContactInfo />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
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
          "50": "#fafaf9",
          "100": "#78716c",
          "200": "#e7e5e4",
          "300": "#d6d3d1",
          "400": "#a8a29e",
          "500": "#f5f5f4",
          "600": "#57534e",
          "700": "#44403c",
          "800": "#292524",
          "900": "#1c1917",
        },
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
console.log(theme);
root.render(
  <CssVarsProvider theme={theme}>
    <App />
  </CssVarsProvider>
);
