import { Box, Button, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const AboutUsPage = () => {
  return (
    <>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#F2F2F7"
        sx={{ padding: "25px" }}
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
          }}
        >
          <Typography sx={{ textAlign: "center", padding: "15px" }} level="h1">
            E20
          </Typography>
          <Typography sx={{ textAlign: "center", paddingX: "15px" }} level="h2">
            Magazin Online pentru Animale de Companie
          </Typography>
          <Typography
            level="body-lg"
            sx={{
              width: { xs: "100%", sm: "100%", md: "900px" },
              padding: "15px",
            }}
          >
            Plecând de la viziunea de a deveni un ecosistem de comerț online
            pentru iubitorii de animale de companie din Europa Centrală și de
            Est, am reușit să construim o platformă universală de shopping prin
            care clienții pot găsi tot ceea ce au nevoie pentru îngrijirea și
            fericirea animalelor lor de companie, oriunde și oricând au nevoie.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            width: { xs: "100%", sm: "100%", md: "900px" },
            marginTop: { xs: "10px", md: "10px" },
            marginBottom: { xs: "10px", md: "25px" },
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ textAlign: "center" }} level="h2">
            Întâlnește echipa
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "15px",
                marginTop: "15px",
                width: "230px",
                minHeight: "510px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  objectFit: "cover",
                }}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Box sx={{ padding: "15px" }}>
                <Typography level="body-md" fontWeight="lg">
                  Jonathan Kay
                </Typography>
                <Typography level="body-sm">CO-Founder & CEO</Typography>
                <div
                  style={{
                    borderBottom: "2px solid #ddd",
                    width: "100%",
                  }}
                ></div>
                <Typography sx={{ width: "100%", color: "#444" }}>
                  Pionierul nostru, o forță motrice în domeniul nostru călăuzind
                  echipa către excelență în tehnologie.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "15px",
                marginTop: "15px",
                width: "230px",
                minHeight: "510px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  objectFit: "cover",
                }}
                src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
                alt="Person"
              />
              <Box sx={{ padding: "15px" }}>
                <Typography level="body-md" fontWeight="lg">
                  Kate Bilyeu
                </Typography>
                <Typography level="body-sm">Designer de Produs</Typography>
                <div
                  style={{
                    borderBottom: "2px solid #ddd",
                    width: "100%",
                  }}
                ></div>
                <Typography sx={{ width: "100%", color: "#444" }}>
                  Creativitatea ei ne aduce designuri inovatoare care
                  îmbunătățesc experiența utilizatorilor.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "15px",
                marginTop: "15px",
                width: "230px",
                minHeight: "510px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  objectFit: "cover",
                }}
                src="https://images.unsplash.com/photo-1587723958656-ee042cc565a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Box sx={{ padding: "15px" }}>
                <Typography level="body-md" fontWeight="lg">
                  Luna
                </Typography>
                <Typography level="body-sm">Lead Purrgrammer</Typography>
                <div
                  style={{
                    borderBottom: "2px solid #ddd",
                    width: "100%",
                  }}
                ></div>
                <Typography sx={{ width: "100%", color: "#444" }}>
                  Specialist în arta dezvoltării produselor pentru animale de
                  companie, pasionat de bunăstarea lor.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "15px",
                marginTop: "15px",
                width: "230px",
                minHeight: "510px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  objectFit: "cover",
                }}
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Box sx={{ padding: "15px" }}>
                <Typography level="body-md" fontWeight="lg">
                  Mike Fairchild
                </Typography>
                <Typography level="body-sm">Inginer Senior de Date</Typography>
                <div
                  style={{
                    borderBottom: "2px solid #ddd",
                    width: "100%",
                  }}
                ></div>
                <Typography
                  sx={{
                    width: "100%",
                    color: "#444",
                    minHeight: { xs: "0px", sm: "130px", md: "0px" },
                  }}
                >
                  Analize profunde ale datelor, furnizând informații valoroase
                  pentru luarea deciziilor.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "15px",
                marginTop: "15px",
                width: "230px",
                minHeight: "510px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  objectFit: "cover",
                }}
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Box sx={{ padding: "15px" }}>
                <Typography level="body-md" fontWeight="lg">
                  Adam Gilinsky
                </Typography>
                <Typography level="body-sm">Manager de Produs</Typography>
                <div
                  style={{
                    borderBottom: "2px solid #ddd",
                    width: "100%",
                  }}
                ></div>
                <Typography sx={{ width: "100%", color: "#444" }}>
                  Ghidul echipei noastre, asigurând dezvoltarea și lansarea cu
                  succes a produselor noastre.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Link to="/contact">
            <Button
              sx={{
                marginTop: "15px",
                color: "primary",
              }}
            >
              Angajam
            </Button>
          </Link>
        </Box>
      </Grid>
    </>
  );
};
export default AboutUsPage;
