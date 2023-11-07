import { Box, Grid } from "@mui/joy";
import CircularProgress from "@mui/joy/CircularProgress";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuDropdown from "../components/MenuDropdown";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();
  const getProducts = async () => {
    try {
      const result = await axios.get(
        "https://e20.ro/api/products?page=1&limit=50"
      );
      console.log(result);
      setProductList(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/administrare", { replace: true }); // replace inlocuieste ruta precedenta in cazul asta "/" FOARTE IMPORTANT!!!!!!!!!!
    }
    getProducts();
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    console.log(lsCart);
    setCartData(lsCart ? lsCart : []);
  }, []);
  return (
    <>
      {productList?.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: "calc(50% - 40px)",
            left: "calc(50% - 40px)",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          display="flex"
          flexDirection="row"
          sx={{ gap: 2, m: 1 }}
        >
          {productList?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                product={product}
                setCartData={setCartData}
                cartData={cartData}
              />
            );
          })}
        </Grid>
      )}
    </>
  );
};
export default HomePage;
