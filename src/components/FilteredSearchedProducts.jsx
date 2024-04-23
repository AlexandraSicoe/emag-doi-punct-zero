import { Box, Grid, Typography } from "@mui/joy";
import { useSearch } from "../components/SearchProvider";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const FilteredSearchedProducts = ({ productList, searchInput }) => {
  const [cartData, setCartData] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [noSearchProductFound, setNoSearchProductFound] = useState(false);

  function removeDiacritics(str) {
    return str
      .normalize("NFD") // Normalize to decomposed form
      .replace(/[\u0300-\u036f]/g, ""); // Remove diacritics
  }

  useEffect(() => {
    if (searchInput.length === 0) {
      setFilteredProductList([]);
      setNoSearchProductFound(false);
    }

    console.log(productList);

    if (
      typeof searchInput === "string" &&
      searchInput.length > 3 &&
      productList?.length > 0
    ) {
      const filteredProducts = productList.filter((product) => {
        const lowercasedSearchInput = removeDiacritics(
          searchInput.toLowerCase()
        );
        const removeDiacriticsFromProperty = (property) =>
          removeDiacritics(property.toLowerCase());

        // Check if the diacritics-removed searchInput is included in any of the properties
        return (
          removeDiacriticsFromProperty(product.name).includes(
            lowercasedSearchInput
          ) ||
          removeDiacriticsFromProperty(product.description).includes(
            lowercasedSearchInput
          ) ||
          removeDiacriticsFromProperty(product.category.title).includes(
            lowercasedSearchInput
          ) ||
          removeDiacriticsFromProperty(product.user.name).includes(
            lowercasedSearchInput
          )
        );
      });
      setFilteredProductList(filteredProducts);
      if (filteredProducts.length == 0) {
        setNoSearchProductFound(true);
      } else {
        setNoSearchProductFound(false);
      }
    }
    console.log(searchInput);
  }, [searchInput]);

  return filteredProductList.length > 0 ? (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <Typography level="h2" sx={{ color: "black", marginTop: "10px" }}>
          Rezultatele căutării
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
  ) : noSearchProductFound ? (
    <Typography level="h3">Nu s-a găsit niciun rezultat.</Typography>
  ) : null;
};

export default FilteredSearchedProducts;
