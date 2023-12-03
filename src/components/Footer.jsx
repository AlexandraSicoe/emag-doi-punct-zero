import { Box, Grid, List, ListItem, Typography } from "@mui/joy";
import { Link, useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <Grid
        sx={{
          height: "100%",
          padding: "25px",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "center" },
          justifySelf: "end",
          backgroundImage:
            "linear-gradient(67deg, rgba(2,0,36,1) 0%, rgba(139,92,246,1) 0%, rgba(139,92,246,1) 23%, rgba(168,110,204,1) 46%, rgba(181,118,185,1) 55%, rgba(186,121,178,1) 66%, rgba(246,159,92,1) 98%)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            marginBottom: "15px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            marginTop: "15px",
          }}
        >
          <Typography
            level="body-lg"
            sx={{
              color: "white",
              marginRight: {
                xs: "0px",
                md: "50px",
              },
              marginBottom: { xs: "15px", md: "0px" },
            }}
          >
            ABONEAZA-TE LA NEWSLETTER
          </Typography>
          <Input
            sx={{
              marginRight: { xs: "0px", md: "5px" },
              marginBottom: { xs: "15px", md: "0px" },
              width: { xs: "85%", md: "25%" },
            }}
            placeholder="Adresa de email"
          />
          <Button
            variant="outlined"
            sx={{
              color: "white",
              "&:hover": { color: "black", backgroundColor: "#8b5cf6" },
            }}
          >
            Trimite
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            color: "white",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: { xs: "20px", md: "0px" },
            }}
          >
            <Typography sx={{ color: "white" }} level="body-lg">
              E20
            </Typography>
            <List
              sx={{
                alignItems: "center",
              }}
            >
              <ListItem>
                <Link style={{ color: "white" }} to="/">
                  Produse
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: { xs: "20px", md: "0px" },
            }}
          >
            <Typography sx={{ color: "white" }} level="body-lg">
              INFO CLIENTI
            </Typography>
            <List
              sx={{
                alignItems: "center",
              }}
            >
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
                <Link style={{ color: "white" }} to="https://anpc.ro/">
                  ANPC
                </Link>
              </ListItem>
              <ListItem>
                <Link style={{ color: "white" }} to="/#">
                  Termeni si Conditii
                </Link>
              </ListItem>
              <ListItem>
                <Link style={{ color: "white" }} to="/#">
                  Politica de confidentialitate
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              alignItems: "center",
              marginBottom: { xs: "20px", md: "0px" },
            }}
          >
            <Typography
              sx={{ color: "white", marginBottom: "10px" }}
              level="body-lg"
            >
              SOCIAL
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "15px",
              }}
            >
              <ListItem>
                <Link style={{ color: "white", marginRight: "5px" }} to="#">
                  <i
                    style={{
                      fontSize: "25px",
                    }}
                    class="fa-brands fa-square-instagram"
                  ></i>
                </Link>
              </ListItem>
              <Typography
                level="body-md"
                sx={{
                  color: "white",
                }}
              >
                Instagram
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "15px",
              }}
            >
              <ListItem>
                <Link style={{ color: "white", marginRight: "5px" }} to="#">
                  <i
                    style={{
                      fontSize: "20px",
                    }}
                    class="fa-brands fa-facebook"
                  ></i>
                </Link>
              </ListItem>
              <Typography
                level="body-md"
                sx={{
                  color: "white",
                }}
              >
                Facebook
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "15px",
              }}
            >
              <ListItem>
                <Link style={{ color: "white", marginRight: "5px" }} to="#">
                  <i
                    style={{
                      fontSize: "20px",
                    }}
                    class="fa-brands fa-square-whatsapp"
                  ></i>
                </Link>
              </ListItem>
              <Typography
                level="body-md"
                sx={{
                  color: "white",
                }}
              >
                WhatsApp
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "15px",
              }}
            >
              <ListItem>
                <Link style={{ color: "white", marginRight: "5px" }} to="#">
                  <i
                    style={{
                      fontSize: "20px",
                    }}
                    class="fa-brands fa-twitter"
                  ></i>
                </Link>
              </ListItem>
              <Typography
                level="body-md"
                sx={{
                  color: "white",
                }}
              >
                Twitter
              </Typography>
            </Box>
          </Box>
        </Box>
        <div
          style={{
            borderBottom: "1px solid white",
            width: "100%",
            padding: "5px",
          }}
        ></div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <Typography level="body-md" sx={{ color: "white" }}>
            Copyright © 2023, E20.
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
export default Footer;
