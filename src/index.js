import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import "./index.css";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";

import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/administrare" element={<LoginRegisterPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
