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
        alignItems: { xs: "center", md: "start" },
        justifyContent: { xs: "start", md: "center" },
        padding: "25px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "16px",
          marginLeft: { xs: "0px", md: "25px" },
          marginTop: { xs: "25px", md: "0px" },
        }}
      >
        <Typography level="title-lg" sx={{ marginBottom: "10px" }} level="h3">
          Ultima comandă
        </Typography>

        <Box>
          {lastOrder ? (
            <Box
              style={{
                padding: "20px",
                backgroundColor: "#f4f4f4",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography level="title-lg">Informații comandă</Typography>
              <Box>
                <Typography level="body-md">
                  Cod comandă {lastOrder._id.slice(0, -12)}
                </Typography>
                {lastOrder.products.map((product, index) => (
                  <Box
                    key={index}
                    style={{
                      marginBottom: "20px",
                      padding: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography level="body-lg" sx={{ fontWeight: "bold" }}>
                        {product.name}
                      </Typography>
                      <Typography level="body-md">
                        Categorie:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          {product.category.title}
                        </span>
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        justifyContent: "flex-end",
                      }}
                    >
                      <img
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          marginRight: "10px",
                        }}
                        src={product.images}
                        alt="Product"
                      />
                      <Typography level="body-md" sx={{ fontWeight: "bold" }}>
                        {product.price} RON
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Typography level="body-md">
                  Total:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {lastOrder.totalPrice} RON
                  </span>
                </Typography>
                <Typography level="body-md">
                  Data creării:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {lastOrder.createdAt}
                  </span>
                </Typography>
              </Box>
            </Box>
          ) : (
            <Typography>Încă nu ai nicio comandă</Typography>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "16px",
          borderRadius: "16px",
          marginLeft: { xs: "0px", md: "25px" },
          marginTop: { xs: "25px", md: "0px" },
        }}
      >
        <Button size="md" sx={{ marginBottom: "10px" }}>
          Vezi produsele tale
        </Button>
        <Button size="md" sx={{ marginBottom: "10px" }}>
          Adaugă produs nou
        </Button>
        <Button size="md" sx={{ marginBottom: "10px" }}>
          Șterge un produs
        </Button>
      </Box>
    </Grid>
  );
};
export default Dashboard;
