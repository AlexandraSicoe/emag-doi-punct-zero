import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import MenuDropdown from "../components/MenuDropdown";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { SearchProvider } from "../components/SearchProvider";
import { CategoryProvider } from "../components/CategoryProvider";
import { CartProvider } from "../components/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MenuFooterLayout = () => {
  return (
    <SearchProvider>
      <CategoryProvider>
        <CartProvider>
          <Navbar />
          <MenuDropdown isDropdownOpen={true} />
          <Outlet />
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </CartProvider>
      </CategoryProvider>
    </SearchProvider>
  );
};

export default MenuFooterLayout;
