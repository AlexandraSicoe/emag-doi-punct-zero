import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import MenuDropdown from "../components/MenuDropdown";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const MenuFooterLayout = () => {
  const [cartData, setCartData] = useState([]);
  const [route, setRoute] = useState(window.location.pathname);
  const location = useLocation();
  useEffect(() => {
    setRoute(location.pathname); // Update the route state when the location changes
  }, [location.pathname]);
  useEffect(() => {
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    setCartData(lsCart ? lsCart : []);
  }, []);

  return (
    <>
      <Navbar cartData={cartData} />
      <MenuDropdown isDropdownOpen={route === "/"} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MenuFooterLayout;
