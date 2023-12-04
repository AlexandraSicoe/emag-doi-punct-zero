import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import MenuDropdown from "../components/MenuDropdown";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const MenuFooterLayout = () => {
  const [cartData, setCartData] = useState([]);
  const [route, setRoute] = useState(window.location.pathname);
  const location = useLocation();

  const handleStorageChange = () => {
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    setCartData(lsCart ? lsCart : []);
  };

  useEffect(() => {
    setRoute(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    setCartData(lsCart ? lsCart : []);

    const handleCustomEvent = () => {
      // Handle the custom event
      handleStorageChange();
    };

    // Add an event listener for the custom event
    window.addEventListener("customStorageChange", handleCustomEvent);

    return () => {
      window.removeEventListener("customStorageChange", handleCustomEvent);
    };
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
