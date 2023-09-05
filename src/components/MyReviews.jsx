import { Box, Grid, Typography, Button } from "@mui/joy";
import Review from "../components/Review";

const MyReviews = () => {
  return (
    <>
      <Grid
        backgroundColor="#F2F2F7"
        sx={{
          flexDirection: { xs: "column" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          backgroundColor="white"
          p={2}
          sx={{
            marginBottom: { xs: "25px", md: "25px" },
            borderRadius: "16px",
            marginTop: { xs: "0px", md: "25px" },
            width: {
              xs: "350px",
              sm: "345px",
              md: "1000px",
            },
          }}
        >
          <Typography sx={{ marginBottom: "10px" }} level="h3">
            Review-urile mele
          </Typography>
          <Box
            display="flex"
            sx={{
              borderBottom: "1px solid lightgray",
              paddingBottom: "15px",
              justifyContent: { xs: "center", md: "flex-start" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Button
              sx={{
                backgroundColor: "black",
                marginRight: "10px",
                marginBottom: { xs: "10px", md: "0px" },
              }}
            >
              Adauga review de produs
            </Button>
            <Button
              sx={{
                backgroundColor: "black",
                marginRight: "10px",
                marginBottom: { xs: "10px", md: "0px" },
              }}
            >
              Seller rating
            </Button>
            <Button
              sx={{
                backgroundColor: "black",
                marginRight: "10px",
                marginBottom: { xs: "10px", md: "0px" },
              }}
            >
              Review-uri adaugate
            </Button>
          </Box>
          <Review />
          <Review />
        </Box>
      </Grid>
    </>
  );
};
export default MyReviews;
