import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import MenuDropdown from "../components/MenuDropdown";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { SearchProvider } from "../components/SearchProvider";
import { CartProvider } from "../components/CartProvider";

const MenuFooterLayout = () => {
  return (
    <SearchProvider>
      <CartProvider>
        <Navbar />
        <MenuDropdown isDropdownOpen={true} />
        <Outlet />
        <Footer />
      </CartProvider>
    </SearchProvider>
  );
};

export default MenuFooterLayout;
