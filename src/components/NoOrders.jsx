import { Box, Button, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const NoOrders = () => {
  return (
    <Grid
      sx={{
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginBottom: "25px",
        borderRadius: "16px",
        marginTop: { xs: "25px", md: "25px" },
        marginLeft: { xs: "0px", md: "25px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ marginBottom: "5px", textAlign: "center" }}
          level="h4"
        >
          Deocamdată nu ai efectuat nicio comandă!
        </Typography>
        <Typography
          sx={{ marginBottom: "25px", textAlign: "center" }}
          level="body-md"
        >
          Caută produsele potrivite pentru tine și comandă acum!
        </Typography>
        <Link to="/">
          <Button>Vezi produse!</Button>
        </Link>
      </Box>
    </Grid>
  );
};
export default NoOrders;
