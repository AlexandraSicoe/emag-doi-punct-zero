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
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: { xs: "350px", sm: "345px", md: "1000px" },
            marginTop: { xs: "0px", md: "25px" },
            padding: "25px",
          }}
        >
          <Typography level="h1">E20</Typography>
          <Typography level="h3">
            Magazin Online pentru Animale de Companie
          </Typography>
          <Typography
            fontWeight="md"
            level="body-lg"
            sx={{
              width: { xs: "350px", sm: "345px", md: "600px" },
              padding: "15px",
            }}
          >
            Plecând de la viziunea de a deveni un ecosistem de comerț online
            pentru iubitorii de animale de companie din Europa Centrală și de
            Est, am reușit să construim o platformă universală de shopping prin
            care clienții pot găsi tot ceea ce au nevoie pentru îngrijirea și
            fericirea animalelor lor de companie, oriunde și oricând au nevoie.
          </Typography>
          <Typography level="h2" sx={{ paddingTop: "15px" }}>
            Cine suntem?
          </Typography>
          <Typography
            level="body-lg"
            fontWeight="md"
            sx={{
              width: { xs: "350px", sm: "345px", md: "600px" },
              padding: "15px",
            }}
          >
            La început, E20 a fost un mic magazin online, specializat în produse
            pentru animalele de companie. De atunci și până astăzi, timp de 20
            de ani, am căutat în fiecare zi să ajungem mai departe și să facem
            mereu lucrurile mai bine. Cu o misiune clară de a aduce în casele
            dumneavoastră cele mai bune produse pentru câini, pisici și păsări,
            suntem dedicați să vă susținem în îngrijirea și bucuria oferită de
            animalele voastre de companie.
          </Typography>

          <Typography level="h2" sx={{ paddingTop: "15px" }}>
            Misiunea Noastră
          </Typography>
          <Typography
            level="body-lg"
            fontWeight="md"
            sx={{
              width: { xs: "350px", sm: "345px", md: "600px" },
              padding: "15px",
            }}
          >
            Misiunea noastră este să vă ajutăm să oferiți celor mai buni
            prieteni ai dumneavoastră viața fericită și sănătoasă pe care o
            merită. Ne străduim să vă oferim cele mai bune produse și servicii,
            astfel încât să puteți crea legături puternice și să vă bucurați de
            fiecare moment petrecut alături de animalele voastre de companie.
            Alăturați-vă comunității E20 și descoperiți o lume de produse pentru
            animalele de companie, gândite pentru a satisface nevoile și
            dorințele tuturor iubitorilor de animale.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            width: { xs: "350px", sm: "345px", md: "1000px" },
            marginTop: { xs: "10px", md: "25px" },
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography level="h1">Întâlnește echipa</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
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
