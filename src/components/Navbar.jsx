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
import SideModal from "./SideModal.tsx";
import genericProductImage from "../images/genericProduct.png";
import InfoIcon from "@mui/icons-material/Info";
import Logo from "../images/logo.png";
import { useSearch } from "./SearchProvider.jsx";
import { debounce } from "lodash";
import { useCart } from "./CartProvider.jsx";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartValue, setCartValue] = useCart();
  const navigate = useNavigate();
  const { searchInput, setSearchInput } = useSearch();
  const debouncedSetSearchInput = debounce((value) => {
    setSearchInput(value);
  }, 1000);

  const handleSearchChange = (e) => {
    const { value } = e.target;

    // Call the debouncedSetSearchInput instead of setSearchInput directly
    debouncedSetSearchInput(value);
  };

  useEffect(() => {
    if (cartValue) {
      let sum = 0;
      cartValue.forEach((product) => {
        sum = sum + product.price * (product.quantity || 1);
      });
      setTotalPrice(sum);
    }
  }, [cartValue]);

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
            onChange={handleSearchChange}
            sx={{
              width: { md: "370px", lg: "500px" },
              display: { xs: "none", md: "flex" },
            }}
            placeholder="Începe o nouă căutare"
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Link to="/account">
              <Box
                sx={{
                  display: { xs: "none", md: "inline-block" },
                }}
              >
                <Button
                  startDecorator={<PersonIcon />}
                  sx={{ paddingInline: "12px" }}
                >
                  <Typography
                    color="common.white"
                    sx={{
                      marginRight: { xs: "0px", sm: "0px", md: "5px" },
                      width: "100%",
                    }}
                  >
                    Contul meu
                  </Typography>
                </Button>
              </Box>
              <Box
                sx={{
                  display: { xs: "inline-block", md: "none" },
                }}
              >
                <Button>
                  <PersonIcon />
                </Button>
              </Box>
            </Link>
            <Box
              sx={{
                display: { xs: "none", md: "inline-block" },
              }}
            >
              <Button
                startDecorator={<ShoppingCartIcon />}
                sx={{ marginLeft: "5px", width: "100%", paddingInline: "12px" }}
                onClick={() => {
                  setDrawerOpen(!drawerOpen);
                }}
              >
                <Typography
                  color="common.white"
                  sx={{
                    display: { xs: "none", md: "inline-block" },
                  }}
                >
                  Coș de cumpărături
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: "inline-block", md: "none" },
              }}
            >
              <Button
                sx={{ marginLeft: "5px" }}
                onClick={() => {
                  setDrawerOpen(!drawerOpen);
                }}
              >
                <ShoppingCartIcon />
              </Button>
            </Box>
          </Box>
        </Container>
        <Container
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <Input
            onChange={handleSearchChange}
            sx={{
              width: "100%",
            }}
            placeholder="Începe o nouă căutare"
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
      <SideModal
        size="375px"
        position="right"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        {cartValue?.length === 0 ? (
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
              Închide coș
            </Button>
          </Box>
        ) : (
          <>
            <Card variant="outlined" sx={{ width: "100%", p: 0 }}>
              <List sx={{ py: "var(--ListDivider-gap)" }}>
                {cartValue?.map((product, index) => (
                  <React.Fragment key={product.id}>
                    <ListItem sx={{ gap: 2 }}>
                      <img
                        style={{ height: "70px" }}
                        src={
                          product.images[0]
                            ? product.images[0]
                            : genericProductImage
                        }
                        alt="product"
                      />
                      <ListItemContent>
                        <Typography fontWeight="md">{product.name}</Typography>
                        <Typography level="body-sm">
                          Pret: {product.price.toFixed(2)}
                        </Typography>
                      </ListItemContent>
                    </ListItem>
                    {index !== cartValue.length - 1 && <ListDivider />}
                  </React.Fragment>
                ))}
              </List>
            </Card>
            <Typography level="body-lg" color="danger" p={1}>
              Total: {totalPrice.toFixed(2)} RON
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Link to={"/checkout"}>
                <Button
                  sx={{ marginY: "10px" }}
                  size="md"
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                >
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
      </SideModal>
    </>
  );
};
export default Navbar;
