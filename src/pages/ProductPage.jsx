import { Box, Grid, Typography } from "@mui/joy";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  return (
    <Grid>
      <Navbar />
      <Box>
        <Box>
          <Typography level="h4">Dog Hoodie</Typography>
          <img
            src="https://images.unsplash.com/photo-1583337426008-2fef51aa841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            alt="dog hoodie"
          />
        </Box>
      </Box>
    </Grid>
  );
};
export default ProductPage;
