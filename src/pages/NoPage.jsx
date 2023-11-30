import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/joy";
const NoPage = () => {
  return (
    <>
      <Grid
        backgroundColor="#F2F2F7"
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: { xs: "100%", sm: "100%", md: "800px" },
          }}
        >
          <Typography
            level="h1"
            sx={{ marginBottom: "25px", textAlign: "center" }}
          >
            Eroare 404 - Pagina nu a fost găsită
          </Typography>
          <Typography level="body-md" sx={{ marginBottom: "25px" }}>
            Ne pare rău, dar se pare că ai ajuns într-un loc inexistent. Pagina
            pe care o cauți a dispărut sau nu a existat niciodată. Te rugăm să
            verifici adresa URL și să încerci din nou
          </Typography>
          <Button size="sm">
            <Link style={{ color: "white" }} to="/">
              Întoarce-te pe pagina principală
            </Link>
          </Button>
        </Box>
      </Grid>
    </>
  );
};
export default NoPage;
