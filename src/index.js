import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
export default function App() {
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
          50: "#324321",
          100: "#324321",
          200: "#324321",
          300: "#324321",
          400: "#324321",
          500: "#324321",
          600: "#324321",
          700: "#324321",
          800: "#324321",
          900: "#324321",
        },
        secondary: {
          50: "#A49F67",
          100: "#A49F67",
          200: "#A49F67",
          300: "#A49F67",
          400: "#A49F67",
          500: "#A49F67",
          600: "#A49F67",
          700: "#A49F67",
          800: "#A49F67",
          900: "#A49F67",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#324321",
          100: "#324321",
          200: "#324321",
          300: "#324321",
          400: "#324321",
          500: "#324321",
          600: "#324321",
          700: "#324321",
          800: "#324321",
          900: "#324321",
        },
        secondary: {
          50: "#A49F67",
          100: "#A49F67",
          200: "#A49F67",
          300: "#A49F67",
          400: "#A49F67",
          500: "#A49F67",
          600: "#A49F67",
          700: "#A49F67",
          800: "#A49F67",
          900: "#A49F67",
        },
      },
    },
  },
  Typography: {
    fontFamily: "Poppins",
  },
});
root.render(
  <CssVarsProvider theme={theme}>
    <App />
  </CssVarsProvider>
);
