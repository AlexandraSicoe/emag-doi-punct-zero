import { Box, Button, Grid, Typography } from "@mui/joy";

const Dashboard = () => {
  return (
    <Grid>
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
        <Typography sx={{ marginBottom: "10px" }} level="h3">
          Ultima comandă
        </Typography>
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
        <Button sx={{ marginBottom: "10px" }}>Vezi produsele tale</Button>
        <Button sx={{ marginBottom: "10px" }}>Adaugă produs nou</Button>
        <Button sx={{ marginBottom: "10px" }}>Șterge un produs</Button>
      </Box>
    </Grid>
  );
};
export default Dashboard;
