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
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart.tsx";
import genericProductImage from "../images/genericProduct.png";
import InfoIcon from "@mui/icons-material/Info";
import Logo from "../images/logo.png";

const Navbar = ({ cartData }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartData) {
      let sum = 0;
      cartData.forEach((product) => {
        sum = sum + product.price * (product.quantity || 1);
      });
      setTotalPrice(sum);
    }
  }, [cartData]);

  return (
    <>
      <Box sx={{ height: { xs: "110px", md: "70px" } }}></Box>
      <Box
        sx={{
          backgroundColor: "black",
          position: "fixed",
          zIndex: 9999,
          left: 0,
          top: 0,
          width: "100%",
          padding: "10px 0px 10px 0px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            onClick={() => {
              navigate("/");
            }}
            style={{ height: "50px", padding: "3px", cursor: "pointer" }}
            src={Logo}
          />

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
        size="375px"
        position="right"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        {cartData?.length === 0 ? (
          <Box sx={{ paddingTop: "15px" }}>
            <Box sx={{ display: "flex" }}>
              <InfoIcon color="primary" />
              <Typography sx={{ paddingBottom: "15px", paddingLeft: "15px" }}>
                Cosul tau nu contine produse.
              </Typography>
            </Box>

            <Button
              sx={{ marginY: "10px" }}
              size="lg"
              onClick={() => {
                setDrawerOpen(!drawerOpen);
              }}
            >
              Inchide cos
            </Button>
          </Box>
        ) : (
          <>
            <Card variant="outlined" sx={{ width: "100%", p: 0 }}>
              <List sx={{ py: "var(--ListDivider-gap)" }}>
                {cartData?.map((product, index) => (
                  <React.Fragment key={product.id}>
                    <ListItem sx={{ gap: 2 }}>
                      <AspectRatio sx={{ flexBasis: 120 }}>
                        {/* {console.log(product)} */}

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
            <Typography level="body-lg" color="danger" p={1}>
              Total: {totalPrice} RON
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Link to={"/checkout"}>
                <Button sx={{ marginY: "10px" }} size="md">
                  Cumpără produsele
                </Button>
              </Link>
              <Button
                sx={{ marginY: "10px" }}
                size="md"
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                Înapoi
              </Button>
            </Box>
          </>
        )}
      </Cart>
    </>
  );
};
export default Navbar;
