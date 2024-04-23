import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import MenuDropdown from "../components/MenuDropdown";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { SearchProvider } from "../components/SearchProvider";
import { CategoryProvider } from "../components/CategoryProvider";
import { CartProvider } from "../components/CartProvider";

const MenuFooterLayout = () => {
  return (
    <SearchProvider>
      <CategoryProvider>
        <CartProvider>
          <Navbar />
          <MenuDropdown isDropdownOpen={true} />
          <Outlet />
          <Footer />
        </CartProvider>
      </CategoryProvider>
    </SearchProvider>
  );
};

export default MenuFooterLayout;
