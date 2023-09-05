import { Box, Button, Container, Typography } from "@mui/joy";
import Input from "@mui/joy/Input";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    </>
  );
};
export default Navbar;
