import { Box, Button, Grid, Typography } from "@mui/joy";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useCart } from "../components/CartProvider";

const CheckoutPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [cartValue, setCartValue] = useCart();

  function getFirstNumber(str) {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }
  function replaceFirstNumber(str, newNumber) {
    return str.replace(/\d+/, newNumber);
  }
  const handleAddItem = (productId) => {
    const updatedCart = cartValue.map((product) => {
      if (product._id === productId) {
        const _product = _.cloneDeep(product);
        if (/^[0-9]/.test(_product.name.charAt(0))) {
          let numberOfProducts = getFirstNumber(_product.name);

          _product.price =
            (_product.price / numberOfProducts).toFixed(2) *
            (numberOfProducts + 1);
          numberOfProducts++;
          _product.name = replaceFirstNumber(_product.name, numberOfProducts);
        } else {
          _product.name = "2x " + _product.name;
          _product.price = _product.price * 2;
        }
        return _product;
      }
      return product;
    });
    setCartValue(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cartValue.map((product) => {
      if (product._id === productId) {
        const _product = _.cloneDeep(product);
        if (/^[0-9]/.test(_product.name.charAt(0))) {
          let numberOfProducts = getFirstNumber(_product.name);
          console.log(numberOfProducts);
          if (numberOfProducts > 1) {
            _product.price =
              (_product.price / numberOfProducts).toFixed(2) *
              (numberOfProducts - 1);
            numberOfProducts--;
            _product.name = replaceFirstNumber(_product.name, numberOfProducts);
          } else {
            console.log(_product.name);
            numberOfProducts = 1;
          }

          if (numberOfProducts === 1) {
            _product.name = _product.name.slice(3);
          }
        }
        return _product;
      }
      return product;
    });
    setCartValue(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const handleRemoveProduct = (productId) => {
    const updatedCart = cartValue.filter(
      (product) => product._id !== productId
    );
    setCartValue(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    setCartValue(lsCart ? lsCart : []);
    let lsUser = localStorage.getItem("user");
    lsUser = JSON.parse(lsUser);
    setUserData(lsUser);
  }, []);
  const saveOrder = async () => {
    try {
      const result = await axios.post("https://e20.ro/api/orders/order", {
        buyer: userData._id,
        products: cartValue,
        totalPrice: totalPrice,
      });
      localStorage.removeItem("cart");
      setCartValue([]);
      navigate("/");
    } catch (error) {
      const errorMessage = error?.response?.data?.error;
      if (errorMessage) {
        setErrorMessage(errorMessage);
      }
    }
  };

  useEffect(() => {
    let sum = 0;
    cartValue.forEach((product) => {
      sum += product.price * (product.quantity || 1);
    });
    setTotalPrice(sum);
  }, [cartValue]);

  return (
    <>
      <Grid
        backgroundColor="#F2F2F7"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "-60px",
          margin: "25px",
        }}
      >
        <Typography level="h1" sx={{ marginBottom: "25px" }}>
          Coș de cumpărături
        </Typography>
        {cartValue.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                marginRight: "20px",
              }}
            >
              {cartValue?.map((product, index) => {
                return (
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "16px",
                      display: "flex",
                      padding: "15px",
                      justifyContent: "space-between",
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "center",
                      },
                      width: "100%",
                      marginBottom: "25px",
                      flexDirection: { xs: "column", sm: "column", md: "row" },
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
                      <Typography fontWeight="lg" level="body-md">
                        {product.name}
                      </Typography>
                      <Typography
                        level="body-sm"
                        sx={{
                          marginBottom: "5px",
                        }}
                      >
                        Vandut de: {product.user.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        size="sm"
                        onClick={() => handleAddItem(product._id)}
                        sx={{ marginRight: "5px" }}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleRemoveItem(product._id)}
                        sx={{ marginRight: "5px" }}
                      >
                        <i class="fa-solid fa-minus"></i>
                      </Button>
                      <Button
                        size="sm"
                        sx={{ marginRight: "15px" }}
                        onClick={() => {
                          handleRemoveProduct(product._id);
                        }}
                      >
                        <i class="fa fa-trash"></i>
                      </Button>
                      <Typography
                        sx={{ minWidth: "150px", textAlign: "end" }}
                        level="h4"
                      >
                        {product.price.toFixed(2)} RON
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                display: "flex",
                padding: "25px",
                flexDirection: "column",
                alignItems: "start",
                width: "auto",
                marginBottom: "25px",
                width: { xs: "100%", md: "60%", lg: "60%", xl: "20%" },
              }}
            >
              <Typography fontWeight="lg" level="body-lg" pb={1}>
                Sumar comanda
              </Typography>
              <Typography fontWeight="lg" level="body-md">
                Cost produse: {totalPrice.toFixed(2)} RON
              </Typography>
              <Typography level="body-sm" pb={1}>
                Cost livrare si procesare: 0 RON
              </Typography>
              <div
                style={{
                  borderTop: "1px solid black",
                  paddingTop: "10px",
                  width: "100%",
                }}
              ></div>

              <Button
                size="sm"
                onClick={() => {
                  saveOrder();
                  navigate("/");
                }}
              >
                Finalizeaza comanda
              </Button>
            </Box>
          </Box>
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
