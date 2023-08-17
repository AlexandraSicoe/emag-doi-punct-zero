import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Grid, Typography } from "@mui/joy";
import Navbar from "../components/Navbar";
import ReviewSection from "../components/ReviewSection";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <Grid
        container

        // sx={{
        //   display: "flex",
        //   justifyContent: "center",
        // }}
      >
        <Grid xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "end" },
              marginRight: { md: "25px" },
            }}
          >
            <img
              style={{ marginTop: "40px", width: "375px" }}
              src="https://images.unsplash.com/photo-1583337426008-2fef51aa841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="dog hoodie"
            />
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <Box
            sx={{
              marginTop: "40px",
              width: "375px",
              padding: { xs: "25px", md: "0px" },
            }}
          >
            <Typography level="h3" sx={{ marginBottom: "20px" }}>
              Hoodie Puppy Sweatshirt Pocket Doggie Winter Clothes Sweatshirt
              Pet Hooded Coat Jackets Apparel Black And Yellow Medium
            </Typography>
            <Typography level="h4" sx={{ marginBottom: "5px" }}>
              Sold by: Fitwarm Store
            </Typography>
            <Typography level="h4" sx={{ marginBottom: "5px" }}>
              Category: Pets
            </Typography>
            <Typography level="h5" sx={{ marginBottom: "5px" }}>
              Description: Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Necessitatibus et atque dolores exercitationem quod
              reiciendis asperiores magnam numquam nostrum repellat totam animi,
              cupiditate accusamus id molestias quis officiis soluta? Veniam?
            </Typography>
            <Typography level="h4" sx={{ marginBottom: "5px" }}>
              Review Score: 3.5
            </Typography>
            <Typography level="h3" sx={{ color: "red", marginBottom: "10px" }}>
              50 €
            </Typography>
            <Button startDecorator={<ShoppingCartIcon />}>Add to cart</Button>
          </Box>
        </Grid>
        <Grid xs={12}>
          <ReviewSection />
        </Grid>
      </Grid>
    </>
  );
};
export default ProductPage;
