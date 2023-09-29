import { Box, Button, Grid, Typography } from "@mui/joy";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const saveOrder = async () => {
    try {
      const result = await axios.post("https://e20.ro/api/orders/order", {
        buyer: userData._id,
        products: cartData,
        totalPrice: totalPrice,
      });
      localStorage.removeItem("cart");
      navigate("/");
    } catch (error) {
      const errorMessage = error?.response?.data?.error;
      if (errorMessage) {
        setErrorMessage(errorMessage);
      }
    }
  };

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
    let lsUser = localStorage.getItem("user");
    lsUser = JSON.parse(lsUser);
    setUserData(lsUser);
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
                  style={{ width: "120px", marginBottom: "10px" }}
                  src={product.images[0]}
                  alt="product"
                />
                <Typography level="h5">{product.name}</Typography>
                <Typography
                  level="h5"
                  sx={{
                    marginBottom: "5px",
                  }}
                >
                  Vandut de: {product.user.name}
                </Typography>
              </Box>
              <Typography level="h4">{product.price} RON</Typography>
            </Box>
          );
        })}

        <Box
          sx={{
            justifyContent: { xs: "center", md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
          }}
          display="flex"
          alignItems="center"
        >
          <Box
            sx={{
              marginBottom: { xs: "0px", md: "15px" },
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography level="body-md" p={1}>
              Cost produse: {totalPrice} RON
            </Typography>
            <Typography level="body-md" p={1}>
              Cost livrare si procesare: 0 RON
            </Typography>
          </Box>
          <Box sx={{ padding: "15px" }}>
            <Button
              onClick={() => {
                saveOrder();
              }}
            >
              Finalizeaza comanda
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default CheckoutPage;
