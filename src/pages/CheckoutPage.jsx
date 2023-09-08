import { Box, Grid } from "@mui/joy";
import Navbar from "../components/Navbar";
import Order from "../components/Order";

const CheckoutPage = () => {
  return (
    <>
      <Navbar />
      <Grid
        backgroundColor="#F2F2F7"
        sx={{
          flexDirection: { xs: "column", width: "100vw", height: "100%" },
        }}
      >
        <h1>Cosul meu</h1>
        <Box sx={{ backgroundColor: "white", padding: "20px" }}>
          <Order />
        </Box>
      </Grid>
    </>
  );
};
export default CheckoutPage;
