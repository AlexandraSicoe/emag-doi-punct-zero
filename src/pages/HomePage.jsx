import { Box, Grid, Typography } from "@mui/joy";
import CircularProgress from "@mui/joy/CircularProgress";
import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartProvider";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../components/SearchProvider";
import VerticalCarousel from "../components/VerticalCarousel";
import VerticalCarouselData from "../helpers/VerticalCarouselData.json";
import { useCategory } from "../components/CategoryProvider";
import FilteredSearchedProducts from "../components/FilteredSearchedProducts";
import AdoptionBanner from "../images/adoption_banner.png";
import Logo from "../images/logo.png";
import FilteredCategoryProducts from "../components/FilteredCategoryProducts";

const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") document.body.classList.add("show-scroll");

    return () => {
      document.body.classList.remove("show-scroll");
    };
  }, [location]); // used to fix menu position bug created because the scrollbar didn't load so basically we forced the scrollbar to show up before the menu thru the css class show-scroll

  const [productList, setProductList] = useState([]);
  const [cartValue, setCartValue] = useCart();
  const { searchInput } = useSearch();
  const { filterCategory } = useCategory();

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getProducts = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://e20.ro/api/products?page=1&limit=50"
      );
      setProductList(result.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/administrare", { replace: true }); // replace inlocuieste ruta precedenta in cazul asta "/" FOARTE IMPORTANT!!!!!!!!!!
    }
    getProducts();
    let lsCart = localStorage.getItem("cart");
    lsCart = JSON.parse(lsCart);
    setCartValue(lsCart ? lsCart : []);
  }, []);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
            zIndex: 9999,
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
                display: { xs: "flex", sm: "hidden", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <VerticalCarousel slides={VerticalCarouselData.slides} />
            </Box>
            <FilteredCategoryProducts
              productList={productList}
              filterCategory={filterCategory}
            ></FilteredCategoryProducts>
            {searchInput.length > 0 ? (
              <FilteredSearchedProducts
                productList={productList}
                searchInput={searchInput}
              />
            ) : (
              <Box sx={{ width: "100%" }}>
                <Box sx={{ width: "100%" }}>
                  <Typography
                    level="h2"
                    sx={{ color: "black", marginTop: "10px" }}
                  >
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
                          setCartValue={setCartValue}
                          cartValue={cartValue}
                        />
                      </Grid>
                    );
                  })}
                </Grid>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    height: { xs: "700px", md: "500px" },
                    backgroundImage: `url(${AdoptionBanner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    color: "white",
                    padding: "20px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Box>
                    <Typography
                      level="title-lg"
                      sx={{
                        color: "white",
                        marginBottom: "20px",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        width: "100%",
                        alignSelf: "center",
                      }}
                    >
                      Descoperă Iubirea Adevărată: Adoptă un Prieten de Viață!
                    </Typography>
                    <Typography
                      level="body-md"
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
                      , avem suflete adorabile în așteptare să-și găsească
                      căminul fericit.{" "}
                      <span style={{ fontWeight: "bold" }}> E20</span> ne-a
                      oferit susținerea necesară pentru a continua misiunea
                      noastră și să salvăm și mai multe vieți.
                      <div style={{ marginBottom: "5px" }}></div>
                      Adoptă un prieten blănos astăzi cu sprijinul
                      <span style={{ fontWeight: "bold" }}> E20</span> !
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: { xs: "300px", md: "50%" },
                    }}
                  >
                    <Typography
                      level="body-md"
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
                          level="body-md"
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
                          level="body-md"
                          sx={{
                            color: "white",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          Fiecare adopție este susținută de E20 pentru o
                          tranziție lină și fericită.
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          level="body-md"
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
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "end",
                        marginTop: "5px",
                      }}
                    >
                      <img style={{ height: "50px" }} src={Logo} />
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography
                    level="h2"
                    sx={{ color: "black", marginTop: "10px" }}
                  >
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
                          setCartValue={setCartValue}
                          cartValue={cartValue}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
                <Box sx={{ width: "100%" }}>
                  <Typography
                    level="h2"
                    sx={{ color: "black", marginTop: "10px" }}
                  >
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
                          setCartValue={setCartValue}
                          cartValue={cartValue}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            )}
          </Grid>
        </Container>
      )}
    </>
  );
};
export default HomePage;
