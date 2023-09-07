import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Container, Typography } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart.tsx";
import genericProductImage from "../images/genericProduct.png";

const Navbar = ({ cartData }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <>
      <Box sx={{ height: { xs: "112px", md: "40px" } }}></Box>
      <Box
        sx={{
          backgroundColor: "black",
          position: "fixed",
          zIndex: 9999,
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <Container
          sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
        >
          <Link to="/">
            <Typography level="h2" sx={{ color: "white" }}>
              Emag 2.0
            </Typography>
          </Link>

          <Input
            sx={{
              width: { md: "370px", lg: "500px" },
              display: { xs: "none", md: "flex" },
            }}
            placeholder="Incepe o noua cautare"
            endDecorator={
              <Button
                variant="outlined"
                sx={{
                  width: "32px",
                  height: "32px",
                  p: 0,
                  borderRadius: "50%",
                }}
              >
                <SearchIcon
                  sx={{ color: "black", width: "20px", height: "20px", p: 0 }}
                />
              </Button>
            }
          />
          <Box>
            <Link to="/account">
              <Button
                startDecorator={<PersonIcon />}
                sx={{ marginRight: "5px" }}
              >
                Account
              </Button>
            </Link>
            <Link to="#">
              <Button
                startDecorator={<ShoppingCartIcon />}
                sx={{ marginLeft: "5px" }}
                onClick={() => {
                  setDrawerOpen(!drawerOpen);
                }}
              >
                Cart
              </Button>
            </Link>
          </Box>
        </Container>
        <Container
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            p: 1,
          }}
        >
          <Input
            sx={{
              width: "100%",
            }}
            placeholder="Search here"
            endDecorator={
              <Button
                variant="outlined"
                sx={{
                  width: "32px",
                  height: "32px",
                  p: 0,
                  borderRadius: "50%",
                }}
              >
                <SearchIcon
                  sx={{ color: "black", width: "20px", height: "20px", p: 0 }}
                />
              </Button>
            }
          />
        </Container>
      </Box>
      <Cart
        title="Saved Trails"
        size="375px"
        position="right"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <Card variant="outlined" sx={{ width: "100%", p: 0 }}>
          <List sx={{ py: "var(--ListDivider-gap)" }}>
            {cartData?.map((product, index) => (
              <React.Fragment key={product.id}>
                <ListItem sx={{ gap: 2 }}>
                  <AspectRatio sx={{ flexBasis: 120 }}>
                    {console.log(product)}

                    <img
                      style={{ width: "120px" }}
                      src={`${
                        product?.images[0]?.includes("image1_url")
                          ? genericProductImage
                          : product?.images[0]
                      }}?w=120&fit=crop&auto=format`}
                      alt={product.name}
                    />
                  </AspectRatio>
                  <ListItemContent>
                    <Typography fontWeight="md">{product.name}</Typography>
                    <Typography level="body-sm">
                      Pret: {product.price}
                    </Typography>
                  </ListItemContent>
                </ListItem>
                {index !== cartData.length - 1 && <ListDivider />}
              </React.Fragment>
            ))}
          </List>
        </Card>
        <Typography level="body-md">Total:</Typography>
        <Link to={"/"}>
          <Button sx={{ marginY: "10px" }} size="lg">
            Mergi spre checkout
          </Button>
        </Link>
      </Cart>
    </>
  );
};
export default Navbar;
