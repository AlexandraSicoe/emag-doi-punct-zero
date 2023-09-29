import { Box, Container, Typography, Button } from "@mui/joy";
import { Link } from "react-router-dom";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
const MenuDropdown = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);",
          height: { xs: "112px", md: "40px" },
          width: "100%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Link to="/">
            <Button
              size="xs"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                marginRight: "5px",
                marginLeft: "10px",
                padding: "8px",
                border: "1px solid transparent",

                "&:hover": {
                  border: "1px solid white",
                  backgroundColor: "transparent",
                },
              }}
            >
              Products
            </Button>
          </Link>
          <Link to="/about-us">
            <Button
              size="xs"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                marginRight: "5px",
                marginLeft: "10px",
                padding: "8px",
                border: "1px solid transparent",

                "&:hover": {
                  border: "1px solid white",
                  backgroundColor: "transparent",
                },
              }}
            >
              About us
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="xs"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                marginRight: "5px",
                marginLeft: "10px",
                padding: "8px",
                border: "1px solid transparent",

                "&:hover": {
                  border: "1px solid white",
                  backgroundColor: "transparent",
                },
              }}
            >
              Contact
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
};
export default MenuDropdown;
