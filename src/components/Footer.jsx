import { Box, Grid, List, ListItem, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      sx={{
        padding: "25px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(67deg, rgba(2,0,36,1) 0%, rgba(139,92,246,1) 0%, rgba(139,92,246,1) 23%, rgba(168,110,204,1) 46%, rgba(181,118,185,1) 55%, rgba(186,121,178,1) 66%, rgba(246,159,92,1) 98%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          alignItems: "center",
        }}
      >
        <Typography level="h3">E20</Typography>
        <List sx={{ color: "white" }}>
          <ListItem>
            <Link to="#">Blog</Link>
          </ListItem>
          <ListItem>
            <Link to="/about-us">Despre noi</Link>
          </ListItem>
          <ListItem>
            <Link to="/contact">Contact</Link>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <Typography level="h3">INFO CLIENTI</Typography>

        <List sx={{ color: "white" }}>
          <ListItem>
            <Link to="#">Livrarea produselor</Link>
          </ListItem>
          <ListItem>
            <Link to="#">Politica de retur</Link>
          </ListItem>
          <ListItem>
            <Link to="/#">ANPC</Link>
          </ListItem>
          <ListItem>
            <Link to="/#">Formular Retur</Link>
          </ListItem>
          <ListItem>
            <Link to="/#">Info</Link>
          </ListItem>
          <ListItem>
            <Link to="/#">Cariere</Link>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <Typography level="h3">UTILE</Typography>

        <List sx={{ color: "white" }}>
          <ListItem>
            <Link style={{ color: "white" }} to="#">
              Blog
            </Link>
          </ListItem>
          <ListItem>
            <Link to="#">Cum cumpar?</Link>
          </ListItem>
          <ListItem>
            <Link to="/#">Termeni si Conditii</Link>
          </ListItem>
          <ListItem>
            <Link to="/#">
              Politica de confidentialitate si protectia datelor cu caracter
              personal
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/#">Info</Link>
          </ListItem>
          <ListItem>
            <Link to="/#">Cariere</Link>
          </ListItem>
        </List>
      </Box>
    </Grid>
  );
};
export default Footer;
