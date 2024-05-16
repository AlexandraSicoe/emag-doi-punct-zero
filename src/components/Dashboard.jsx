import { Box, Button, CircularProgress, Grid, Typography } from "@mui/joy";
import axios from "axios";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [lastOrder, setLastOrder] = useState(null);
  const fetchLastOrder = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userID = userData._id;
    console.log(userID);
    try {
      const response = await axios.get(
        "https://e20.ro/api/orders/user/" + userID + "/lastOrder"
      );
      console.log("Response:", response);
      for (const product of response.data.products) {
        const category = await axios.get(
          "https://e20.ro/api/categories/" + product.category
        );
        product.category = category.data;
        console.log(category.data);
      }
      console.log(response.data);
      setLastOrder(response.data);
    } catch (error) {
      console.error("Error fetching last order:", error);
    }
  };

  useEffect(() => {
    fetchLastOrder();
  }, []);

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        p={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          backgroundColor: "white",
          borderRadius: "16px",
          borderRadius: "16px",
          marginBottom: "25px",
          marginTop: "25px",
          marginLeft: { xs: "0px", md: "25px" },
        }}
      >
        <Button
          sx={{
            width: { xs: "100%", md: "200px" },
            height: "30px",
            marginBottom: { xs: "15px", sm: "0px" },
            marginRight: { xs: "0px", sm: "15px" },
          }}
        >
          Vezi produsele tale
        </Button>
        <Button
          sx={{
            width: { xs: "100%", md: "200px" },

            height: "30px",
            marginRight: { xs: "0px", sm: "15px" },
            marginBottom: { xs: "15px", sm: "0px" },
          }}
        >
          Adaugă produs nou
        </Button>
        <Button
          sx={{
            width: { xs: "100%", md: "200px" },

            height: "30px",
          }}
        >
          Șterge un produs
        </Button>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "16px",
          marginLeft: { xs: "0px", md: "25px" },
        }}
      >
        <Box>
          {lastOrder ? (
            <>
              <Typography level="title-lg">Ultima comandă</Typography>
              <Box>
                <Typography level="title-sm">
                  Cod comandă: {lastOrder._id.slice(0, -12)}
                </Typography>
                {lastOrder.products.map((product, index) => (
                  <Box
                    key={index}
                    sx={{
                      marginBottom: "20px",
                      padding: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                      display: "flex",
                      flexDirection: { xs: "column", lg: "row" },
                      justifyContent: { xs: "start", md: "space-between" },
                      alignItems: "start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography level="title-md" sx={{ fontWeight: "bold" }}>
                        {product.name}
                      </Typography>
                      <Typography level="title-sm">
                        Categorie:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          {product.category.title}
                        </span>
                      </Typography>
                      <Typography level="title-sm">
                        Preț:
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          {product.price} RON
                        </span>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "100%", lg: "200px" },
                      }}
                    >
                      <img
                        style={{
                          height: "200px",
                          marginTop: { xs: "20px", md: "0px" },
                        }}
                        src={product.images}
                        alt="Product"
                      />
                    </Box>
                  </Box>
                ))}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                  }}
                >
                  <Typography level="title-sm">
                    Total:{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {lastOrder.totalPrice} RON
                    </span>
                  </Typography>
                  <Typography level="title-sm">
                    Data creării:{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {lastOrder.createdAt.slice(0, -14)}
                    </span>
                  </Typography>
                </Box>
              </Box>
            </>
          ) : (
            <Typography>Încă nu ai nicio comandă</Typography>
          )}
        </Box>
      </Box>
    </Grid>
  );
};
export default Dashboard;
