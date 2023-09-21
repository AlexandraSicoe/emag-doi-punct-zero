import { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
  Box,
  Grid,
  Container,
  Typography,
  ListItemButton,
  Button,
} from "@mui/joy";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import Categories from "../helpers/categories.json";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const getProducts = async () => {
    try {
      const result = await axios.get(
        "http://161.35.202.134:3000/products?page=1&limit=50"
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
      <Navbar cartData={cartData} />
      <Box
        sx={{
          backgroundImage:
            "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);",
          height: { xs: "112px", md: "50px" },
          width: "100%",
        }}
      >
        {}
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Dropdown open sx={{ position: "relative" }}>
            <MenuButton size="sm" variant="soft">
              Products
            </MenuButton>
            <Menu
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "0px",
              }}
              placement="top-start"
            >
              <Box>
                {Categories.map((category, index) => {
                  return (
                    <MenuItem
                      onClick={() => {
                        setSelectedCategory(category);
                      }}
                      key={index}
                      variant="plain"
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                        }}
                        level="h5"
                      >
                        <i className={"bi " + category.icon}></i>
                        {category.title}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  right: 0,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: "750px",
                }}
              >
                {selectedCategory?.children.map((subcategory, subindex) => {
                  return (
                    <List
                      sx={{
                        paddingRight: "0.75rem",
                        paddingLeft: "0.75rem",
                      }}
                      key={subindex}
                    >
                      <ListItem
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                          }}
                          level="body-md"
                        >
                          <ListItemButton
                            sx={{
                              paddingLeft: "0px",
                              paddingRight: "0px",
                            }}
                          >
                            {subcategory.title}
                          </ListItemButton>
                        </Typography>

                        {subcategory.children.map(
                          (subSubCategory, subSubIndex) => {
                            return (
                              <ListItemButton
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  padding: "0px",
                                }}
                              >
                                <Typography level="body-sm">
                                  {subSubCategory.title}
                                </Typography>
                              </ListItemButton>
                            );
                          }
                        )}
                      </ListItem>
                    </List>
                  );
                })}
              </Box>
            </Menu>
          </Dropdown>
          <Box>
            <Button
              size="sm"
              variant="soft"
              sx={{ color: "black", marginRight: "5px" }}
            >
              About us
            </Button>
            <Button size="sm" variant="soft" sx={{ color: "black" }}>
              Contact
            </Button>
          </Box>
        </Container>
      </Box>

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
