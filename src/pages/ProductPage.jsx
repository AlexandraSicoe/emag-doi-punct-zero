import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Grid, Typography } from "@mui/joy";
import Navbar from "../components/Navbar";
import ReviewSection from "../components/ReviewSection";
import axios from "axios";
import useQuery from "../helpers/useQuery";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { useNavigate } from "react-router-dom";
import ReviewSample from "../components/ReviewSample";

const ProductPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [productData, setProductData] = useState();
  const [cartData, setCartData] = useState([]);

  const getProductData = async () => {
    try {
      const id = query.get("id");
      if (id && id.length > 0) {
        const result = await axios.get("https://e20.ro/api/products/" + id);
        setProductData(result.data);
      } else {
        navigate("/404", { replace: true }); //in caz ca pagina este eronata, vrem cand dam inapoi ca pagina eronata sa fie ignorata, altfel este un infinite loop
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    console.log(lsCart);
    setCartData(lsCart ? lsCart : []);
  }, []);
  return (
    <>
      <Navbar cartData={cartData} />
      {!productData ? (
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
        <Grid sx={{ padding: "25px" }} container>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "end" },
                marginRight: { md: "25px" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "500px" },
                  objectFit: "contain",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={productData.images[0]}
                  alt="product"
                />
                <ReviewSection />
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <ReviewSample />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                width: { xs: "100%", md: "500px" },
                padding: { xs: "25px", md: "0px" },
              }}
            >
              <Typography level="h3" sx={{ marginBottom: "20px" }}>
                {productData.name}
              </Typography>
              <Typography level="h4" sx={{ marginBottom: "5px" }}>
                Vândut de: {productData.user.name}
              </Typography>
              <Typography level="h4" sx={{ marginBottom: "5px" }}>
                {productData.category}
              </Typography>
              <Typography level="body-md" sx={{ marginBottom: "5px" }}>
                {productData.description}
              </Typography>
              <Typography level="h4" sx={{ marginBottom: "5px" }}>
                Scor Recenzii: {productData.reviewScore}
              </Typography>
              <Typography
                level="h3"
                sx={{ color: "red", marginBottom: "10px" }}
              >
                {productData.price} RON
              </Typography>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  const _cartData = [...cartData, productData];
                  localStorage.setItem("cart", JSON.stringify(_cartData));
                  setCartData(_cartData);
                }}
                startDecorator={<ShoppingCartIcon />}
              >
                Adaugă în coș
              </Button>
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <ReviewSample />
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default ProductPage;
