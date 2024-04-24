import { Box, Grid, Typography } from "@mui/joy";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useCategory } from "../components/CategoryProvider";

const FilteredCategoryProducts = ({ productList, filterCategory }) => {
  const [cartData, setCartData] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);

  useEffect(() => {
    if (!filterCategory) {
      setFilteredProductList([]);
    } else {
      const checkIfProductsAreInCategory = (products, category) => {
        const productsInCategory = [];

        const checkCategory = (product, category) => {
          if (product.category._id === category._id) {
            productsInCategory.push(product);
          }

          if (category.children) {
            category.children.forEach((child) => {
              checkCategory(product, child);
            });
          }
        };

        products.forEach((product) => {
          checkCategory(product, category);
        });

        return productsInCategory;
      };
      setFilteredProductList(
        checkIfProductsAreInCategory(productList, filterCategory)
      );
    }
  }, [filterCategory]);

  return filteredProductList.length > 0 ? (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <Typography level="h2" sx={{ color: "black", marginTop: "10px" }}>
          Rezultatele pentru categoria "{filterCategory.title}".
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          marginX: "-5px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {filteredProductList?.map((product, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard
                product={product}
                setCartData={setCartData}
                cartData={cartData}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  ) : null;
};

export default FilteredCategoryProducts;
