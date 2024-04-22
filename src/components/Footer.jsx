import { Box, Grid, List, ListItem, Typography } from "@mui/joy";

import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Link, useNavigate } from "react-router-dom";
import "./Accordion.css";
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
              "&:hover": { color: "#8b5cf6", backgroundColor: "white" },
            }}
          >
            Trimite
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
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
                  Politica de confidențialitate
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
        {/* <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            alignItems: "center",
            marginBottom: { xs: "20px", md: "0px" },
          }}
        >
          <Dropdown>
            <MenuButton
              sx={{
                color: "white",
                border: "0px",
                fontSize: "20px",
                marginBottom: "10px",
                "&:hover": {
                  color: "black",
                  backgroundColor: "white",
                },
              }}
            >
              E20.
            </MenuButton>
            <Menu
              sx={{
                height: "220px",
                width: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuItem>
                <Link to="/">Produse</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/about-us">Despre noi</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/contact">Contact</Link>
              </MenuItem>
            </Menu>
          </Dropdown>
          <Dropdown>
            <MenuButton
              sx={{
                color: "white",
                border: "0px",
                fontSize: "20px",
                marginBottom: "10px",
                "&:hover": {
                  color: "black",
                  backgroundColor: "white",
                },
              }}
            >
              {" "}
              INFO CLIENTI
            </MenuButton>
            <Menu
              sx={{
                height: "220px",
                width: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuItem>Livrarea produselor</MenuItem>
              <MenuItem>Politica de retur</MenuItem>
              <MenuItem>
                <Link to="https://anpc.ro/">ANPC</Link>
              </MenuItem>
              <MenuItem>Termeni si Conditii</MenuItem>
              <MenuItem> Politica de confidențialitate</MenuItem>
            </Menu>
          </Dropdown>
          <Dropdown>
            <MenuButton
              sx={{
                color: "white",
                border: "0px",
                fontSize: "20px",
                marginBottom: "10px",
                "&:hover": {
                  color: "black",
                  backgroundColor: "white",
                },
              }}
            >
              SOCIAL
            </MenuButton>
            <Menu
              sx={{
                height: "220px",
                width: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuItem>
                <i
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginRight: "5px",
                  }}
                  class="fa-brands fa-square-instagram"
                ></i>
                <Link
                  style={{
                    fontSize: "15px",
                    color: "black",
                  }}
                  to="/"
                >
                  Instagram
                </Link>
              </MenuItem>
              <MenuItem>
                <i
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginRight: "5px",
                  }}
                  class="fa-brands fa-facebook"
                ></i>
                <Link
                  style={{
                    fontSize: "15px",
                    color: "black",
                  }}
                  to="/about-us"
                >
                  Facebook
                </Link>
              </MenuItem>
              <MenuItem>
                <i
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginRight: "5px",
                  }}
                  class="fa-brands fa-square-whatsapp"
                ></i>
                <Link
                  style={{
                    fontSize: "15px",
                    color: "black",
                  }}
                  to="/contact"
                >
                  WhatsApp
                </Link>
              </MenuItem>
              <MenuItem>
                <i
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginRight: "5px",
                  }}
                  class="fa-brands fa-twitter"
                ></i>
                <Link
                  style={{
                    fontSize: "15px",
                    color: "black",
                  }}
                  to="/contact"
                >
                  Twitter
                </Link>
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box> */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: { xs: "column", sm: "row", md: "row" },
            color: "white",
          }}
        >
          <Accordion
            allowMultiple
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <AccordionItem header="E20">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: { xs: "20px", md: "0px" },
                }}
              >
                <Link to="/">Produse</Link>
                <Link to="/about-us">Despre noi</Link>
                <Link to="/contact">Contact</Link>
              </Box>
            </AccordionItem>

            <AccordionItem header="INFO CLIENTI">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: { xs: "20px", md: "0px" },
                }}
              >
                <Link to="#">Livrarea produselor</Link>
                <Link to="#">Politica de retur</Link>
                <Link to="https://anpc.ro/">ANPC</Link>
                <Link to="/#">Termeni si Conditii</Link>
                <Link to="/#">Politica de confidențialitate</Link>
              </Box>
            </AccordionItem>

            <AccordionItem header="SOCIALS">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <ListItem>
                    <i
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                      class="fa-brands fa-square-instagram"
                    ></i>
                    <Link style={{ color: "white" }} to="#">
                      <Typography
                        level="body-md"
                        sx={{
                          color: "white",
                        }}
                      >
                        Instagram
                      </Typography>
                    </Link>
                  </ListItem>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <ListItem>
                    <i
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                      class="fa-brands fa-facebook"
                    ></i>
                    <Link style={{ color: "white" }} to="#">
                      <Typography
                        level="body-md"
                        sx={{
                          color: "white",
                        }}
                      >
                        Facebook
                      </Typography>
                    </Link>
                  </ListItem>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <ListItem>
                    <i
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                      class="fa-brands fa-square-whatsapp"
                    ></i>
                    <Link style={{ color: "white" }} to="#">
                      <Typography
                        level="body-md"
                        sx={{
                          color: "white",
                        }}
                      >
                        WhatsApp
                      </Typography>
                    </Link>
                  </ListItem>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "0px",
                  }}
                >
                  <ListItem>
                    <i
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                      class="fa-brands fa-twitter"
                    ></i>
                    <Link style={{ color: "white" }} to="#">
                      <Typography
                        level="body-md"
                        sx={{
                          color: "white",
                        }}
                      >
                        Twitter
                      </Typography>
                    </Link>
                  </ListItem>
                </Box>
              </Box>
            </AccordionItem>
          </Accordion>
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
