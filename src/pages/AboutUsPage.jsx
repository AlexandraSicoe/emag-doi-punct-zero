import { Box, Button, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MenuDropdown from "../components/MenuDropdown";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <MenuDropdown />

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
        >
          <Typography sx={{ textAlign: "center" }} level="h1">
            E20
          </Typography>
          <Typography sx={{ textAlign: "center" }} level="h2">
            Magazin Online pentru Animale de Companie
          </Typography>
          <Typography
            fontWeight="md"
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
                margin: "15px",
                marginTop: "5px",
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderRadius: "16px",
                }}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Box>
                <Typography level="body-lg" fontWeight="lg">
                  Jonathan Kay
                </Typography>
                <Typography level="body-md">CO-Founder & CEO</Typography>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    width: "40px",
                  }}
                ></div>
                <Typography sx={{ width: "200px" }}>
                  Pionierul nostru, o forță motrice în domeniul nostru călăuzind
                  echipa către excelență în tehnologie.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "15px",
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderRadius: "16px",
                }}
                src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
              />
              <Box>
                <Typography level="body-lg" fontWeight="lg">
                  Kate Bilyeu
                </Typography>
                <Typography level="body-md">
                  Designer Senior de Produs
                </Typography>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    width: "40px",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                ></div>
                <Typography sx={{ width: "200px" }}>
                  Creativitatea ei ne aduce designuri inovatoare care
                  îmbunătățesc experiența utilizatorilor.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "15px",
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderRadius: "16px",
                }}
                src="https://images.unsplash.com/photo-1587723958656-ee042cc565a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Typography level="body-lg" fontWeight="lg">
                Luna
              </Typography>
              <Typography level="body-md">Lead Purrgrammer</Typography>
              <div
                style={{
                  borderBottom: "1px solid black",
                  width: "40px",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              ></div>
              <Typography sx={{ width: "200px" }}>
                Specialist în arta dezvoltării produselor pentru animale de
                companie, pasionat de bunăstarea lor.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "15px",
                paddingTop: "15px",
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderRadius: "16px",
                }}
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Typography level="body-lg" fontWeight="lg">
                Mike Fairchild
              </Typography>
              <Typography level="body-md">Inginer Senior de Date</Typography>
              <div
                style={{
                  borderBottom: "1px solid black",
                  width: "40px",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              ></div>
              <Typography sx={{ width: "200px" }}>
                Analize profunde ale datelor, furnizând informații valoroase
                pentru luarea deciziilor.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "15px",
                paddingTop: "15px",
              }}
            >
              <img
                style={{
                  height: "300px",
                  borderRadius: "16px",
                }}
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Typography level="body-lg" fontWeight="lg">
                Adam Gilinsky
              </Typography>
              <Typography level="body-md">Manager de Produs</Typography>
              <div
                style={{
                  borderBottom: "1px solid black",
                  width: "40px",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              ></div>
              <Typography sx={{ width: "200px" }}>
                Ghidul echipei noastre, asigurând dezvoltarea și lansarea cu
                succes a produselor noastre.
              </Typography>
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
