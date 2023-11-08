import { Box, Button, Grid, Typography } from "@mui/joy";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
        backgroundColor="#F2F2F7"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "-60px",
        }}
      >
        <Typography level="h1" sx={{ marginBottom: "25px" }}>
          Coș de cumpărături
        </Typography>
        {cartData.length > 0 ? (
          <>
            {cartData?.map((product, index) => {
              return (
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    display: "flex",
                    padding: "25px",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "800px",
                    },

                    marginBottom: "25px",
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
                    <Typography level="body-md">{product.name}</Typography>
                    <Typography
                      level="body-sm"
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
                backgroundColor: "white",
                borderRadius: "16px",
                display: "flex",
                padding: "25px",

                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: { xs: "start", md: "center" },
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "800px",
                },

                marginBottom: "25px",
              }}
            >
              <Typography level="body-md" p={1}>
                Cost produse: {totalPrice} RON
              </Typography>
              <Typography level="body-md" p={1}>
                Cost livrare si procesare: 0 RON
              </Typography>
              <Button
                onClick={() => {
                  saveOrder();
                }}
              >
                Finalizeaza comanda
              </Button>
            </Box>
          </>
        ) : (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              margin: "25px",
              borderRadius: "16px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                display: "flex",
                padding: "25px",
                flexDirection: "column",
                alignItems: "center",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "800px",
                },
              }}
            >
              <Typography
                sx={{ marginBottom: "5px", textAlign: "center" }}
                level="h4"
              >
                Deocamdată coșul tău este gol!
              </Typography>
              <Typography
                sx={{ marginBottom: "25px", textAlign: "center" }}
                level="body-md"
              >
                Pentru a adăuga produse în coș te rugăm să te întorci la
                produse.{" "}
              </Typography>
              <Link to="/">
                <Button>Înapoi la produse!</Button>
              </Link>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default CheckoutPage;
