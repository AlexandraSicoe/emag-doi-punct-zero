import { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Box, Grid } from "@mui/joy";
import ProductCard from "../components/ProductCard";
const HomePage = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProductList(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();

    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((result) => {
    //     console.log(result.data);
    //     setProductList(result.data);
    //   })
    //   .catch((err) => {
    //   });
  }, []);
  return (
    <>
      <Navbar />
      <h1>My Store</h1>
      {productList?.length == 0 ? (
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
            return <ProductCard key={index} product={product} />;
          })}
        </Grid>
      )}
    </>
  );
};
export default HomePage;
