import { Box, Grid, List, ListItem, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      sx={{
        padding: "25px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "row" },
        justifyContent: "center",
        alignItems: { xs: "center", md: "start" },
        backgroundImage:
          "linear-gradient(67deg, rgba(2,0,36,1) 0%, rgba(139,92,246,1) 0%, rgba(139,92,246,1) 23%, rgba(168,110,204,1) 46%, rgba(181,118,185,1) 55%, rgba(186,121,178,1) 66%, rgba(246,159,92,1) 98%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          color: "white",
        }}
      >
        <Typography level="h3">E20</Typography>
        <List>
          <ListItem>
            <Link style={{ color: "white" }} to="#">
              Blog
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/about-us">
              Despre noi
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/contact">
              Contact
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <Typography level="h3">INFO CLIENTI</Typography>

        <List sx={{ color: "white" }}>
          <ListItem>
            <Link style={{ color: "white" }} to="#">
              Livrarea produselor
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="#">
              Politica de retur
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/#">
              ANPC
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/#">
              Formular Retur
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/#">
              Info
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/#">
              Cariere
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <Typography level="h3">UTILE</Typography>

        <List>
          <ListItem>
            <Link style={{ color: "white" }} to="#">
              Blog
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="#">
              Cum cumpar?
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/#">
              Termeni si Conditii
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/#">
              Politica de confidentialitate si protectia datelor cu caracter
              personal
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/#">
              Info
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/#">
              Cariere
            </Link>
          </ListItem>
        </List>
      </Box>
    </Grid>
  );
};
export default Footer;
