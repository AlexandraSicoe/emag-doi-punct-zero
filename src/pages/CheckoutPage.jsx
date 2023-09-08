import { Box, Grid, Typography } from "@mui/joy";
import Navbar from "../components/Navbar";
import axios from "axios";

import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartData) {
      let sum = 0;
      cartData.forEach((product) => {
        sum = sum + product.price;
      });
      setTotalPrice(sum);
    }
  }, [cartData]);

  useEffect(() => {
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    console.log(lsCart);
    setCartData(lsCart ? lsCart : []);
  }, []);
  return (
    <>
      <Navbar cartData={cartData} />
      <Grid
        p={3}
        backgroundColor="#F2F2F7"
        sx={{
          flexDirection: { xs: "column", width: "100vw", height: "100%" },
        }}
      >
        <h1>Cosul meu</h1>
        {cartData?.map((product, index) => {
          return (
            <Box
              m={2}
              sx={{
                backgroundColor: "white",
                marginBottom: "15px",
                padding: "15px",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "start", md: "center" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "120px" }}
                  src={product.images[0]}
                  alt="product"
                />
                <Typography level="h4">{product.name}</Typography>
                <Typography
                  level="h4"
                  sx={{
                    marginBottom: "5px",
                  }}
                >
                  Vandut de: {product.user.name}
                </Typography>
              </Box>
              <Typography level="h3">${product.price}</Typography>
            </Box>
          );
        })}
        <Box
          sx={{
            backgroundColor: "white",
            marginBottom: "15px",
            padding: "15px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Typography level="body-lg" p={1}>
            Cost produse: {totalPrice} RON
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
export default CheckoutPage;
