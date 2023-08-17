import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Grid, Typography } from "@mui/joy";
import Navbar from "../components/Navbar";
import ReviewSection from "../components/ReviewSection";
import axios from "axios";
import useQuery from "../helpers/useQuery";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [productData, setProductData] = useState();
  const getProductData = async () => {
    try {
      const id = query.get("id");
      if (id && id.length > 0) {
        const result = await axios.get(
          "http://161.35.202.134:3000/products/" + id
        );
        setProductData(result.data);
      } else {
        navigate("/404", { replace: true }); //in caz ca pagian este eronata, vrem cand dam inapoi ca pagina eronata sa fie ignorata, altfel este un infinite loop
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <>
      <Navbar />
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
        <Grid container>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "end" },
                marginRight: { md: "25px" },
              }}
            >
              <img
                style={{ marginTop: "40px", width: "375px" }}
                src={productData.images[0]}
                alt="product image"
              />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                marginTop: "40px",
                width: "375px",
                padding: { xs: "25px", md: "0px" },
              }}
            >
              <Typography level="h3" sx={{ marginBottom: "20px" }}>
                {productData.name}
              </Typography>
              <Typography level="h4" sx={{ marginBottom: "5px" }}>
                Sold by: {productData.user.name}
              </Typography>
              <Typography level="h4" sx={{ marginBottom: "5px" }}>
                {productData.category}
              </Typography>
              <Typography level="h5" sx={{ marginBottom: "5px" }}>
                {productData.description}
              </Typography>
              <Typography level="h4" sx={{ marginBottom: "5px" }}>
                Review Score: {productData.reviewScore}
              </Typography>
              <Typography
                level="h3"
                sx={{ color: "red", marginBottom: "10px" }}
              >
                ${productData.price}
              </Typography>
              <Button startDecorator={<ShoppingCartIcon />}>Add to cart</Button>
            </Box>
          </Grid>
          <Grid xs={12}>
            <ReviewSection />
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default ProductPage;
