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
      console.log("Response:", response.data);
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
        <Typography sx={{ marginBottom: "10px" }} level="h3">
          Ultima comandă
        </Typography>

        <Box>
          {lastOrder ? (
            <>
              <Typography>Comanda: {lastOrder._id}</Typography>
              {lastOrder.products.map((product, index) => {
                return (
                  <Box key={index}>
                    <Typography>Numele: {product.name}</Typography>
                    <Typography>Categoria: {product.category}</Typography>
                    <Typography>Preț: {product.price}</Typography>
                  </Box>
                );
              })}
              <Typography>Total: {lastOrder.totalPrice}</Typography>
              <Typography>Data creării: {lastOrder.createdAt}</Typography>
            </>
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
