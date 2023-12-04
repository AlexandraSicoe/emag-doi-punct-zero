import { Box, Grid, Typography } from "@mui/joy";
import CircularProgress from "@mui/joy/CircularProgress";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuDropdown from "../components/MenuDropdown";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Container } from "@mui/material";
import AdoptionBanner from "../images/adoption_banner.png";
import Logo from "../images/logo.png";
import VerticalCarousel from "../components/VerticalCarousel";
import VerticalCarouselData from "../helpers/VerticalCarouselData.json";
const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();
  const getProducts = async () => {
    try {
      const result = await axios.get(
        "https://e20.ro/api/products?page=1&limit=50"
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
        <Container>
          <Grid container display="flex" justifyContent="space-between">
            <Box
              sx={{
                height: "285px",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <VerticalCarousel slides={VerticalCarouselData.slides} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography level="h2" sx={{ color: "black", marginTop: "10px" }}>
                Cele mai populare produse
              </Typography>
            </Box>
            <Grid
              container
              sx={{
                marginX: "-5px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {productList?.slice(0, 8).map((product, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <ProductCard
                      product={product}
                      setCartData={setCartData}
                      cartData={cartData}
                    />
                  </Grid>
                );
              })}
            </Grid>

            <Box
              sx={{
                flexDirection: { xs: "column", md: "row" },
                height: { xs: "100%", md: "400px" },
                backgroundImage: `url(${AdoptionBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                color: "white",
                padding: "20px",
                display: "flex", // Add display: "flex" to enable flex properties
                justifyContent: "space-between", // Adjust to space the content
                flexWrap: "wrap",
              }}
            >
              <Typography
                level="h2"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  width: "100%",
                }}
              >
                Descoperă Iubirea Adevărată: Adoptă un Prieten de Viață!
              </Typography>
              <Typography
                level="body-lg"
                sx={{
                  color: "white",
                  width: "500px",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  width: { xs: "100%", md: "50%" },
                  marginBottom: { xs: "20px", md: "0px" },
                }}
              >
                La
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Adăpostul Inimă și Lăbuțe
                </span>
                , avem suflete adorabile în așteptare să-și găsească căminul
                fericit. <span style={{ fontWeight: "bold" }}> E20</span> ne-a
                oferit susținerea necesară pentru a continua misiunea noastră și
                să salvăm și mai multe vieți.
                <div style={{ marginBottom: "5px" }}></div>
                Adoptă un prieten blănos astăzi cu sprijinul
                <span style={{ fontWeight: "bold" }}> E20</span> !
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", md: "50%" },
                }}
              >
                <Typography
                  level="body-lg"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  De ce să adopți cu E20:
                </Typography>
                <ul
                  style={{
                    paddingLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  <li>
                    <Typography
                      level="body-lg"
                      sx={{
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Salvează o viață și primește sprijinul unei comunități
                      dedicate.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      level="body-lg"
                      sx={{
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Fiecare adopție este susținută de E20 pentru o tranziție
                      lină și fericită.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      level="body-lg"
                      sx={{
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Construiește o conexiune autentică și devino parte din
                      familia noastră extinsă.
                    </Typography>
                  </li>
                </ul>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <img style={{ height: "80px" }} src={Logo} />
              </Box>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography level="h2" sx={{ color: "black", marginTop: "10px" }}>
                Vizualizate recent
              </Typography>
            </Box>
            <Grid
              container
              sx={{
                marginX: "-5px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {productList?.slice(0, 8).map((product, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <ProductCard
                      product={product}
                      setCartData={setCartData}
                      cartData={cartData}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Box sx={{ width: "100%" }}>
              <Typography level="h2" sx={{ color: "black", marginTop: "10px" }}>
                Toate produsele{" "}
              </Typography>
            </Box>
            <Grid
              container
              sx={{
                marginX: "-5px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {productList?.map((product, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <ProductCard
                      key={index}
                      product={product}
                      setCartData={setCartData}
                      cartData={cartData}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};
export default HomePage;
