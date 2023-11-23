import { Dashboard } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/joy";
const DashboardPage = () => {
  return (
    <>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#F2F2F7"
        p={3}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: { xs: "100%", sm: "100%", md: "900px" },
            marginTop: { xs: "10px", md: "25px" },
            margin: { sx: "0px", sm: "0px", md: "25px" },
          }}
        ></Box>
      </Grid>
    </>
  );
};
export default DashboardPage;
