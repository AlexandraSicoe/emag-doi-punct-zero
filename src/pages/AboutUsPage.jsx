import { Box, Button, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#F2F2F7"
        p={3}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            width: { xs: "350px", sm: "345px", md: "1000px" },
            marginTop: { xs: "0px", md: "25px" },
            padding: "25px",
          }}
        >
          <Typography level="h1">E20</Typography>
          <Typography
            fontWeight="md"
            level="body-lg"
            sx={{
              width: { xs: "350px", sm: "345px", md: "500px" },
              paddingTop: "15px",
            }}
          >
            Plecând de la viziunea de a deveni cel mai mare ecosistem de comerț
            online din Europa Centrală și de Est, am reușit să construim o
            platformă universală de shopping prin care clienții pot cumpăra
            orice au nevoie din milioanele de produse disponibile, oriunde și
            oricând au nevoie.
          </Typography>
          <Typography level="h1" sx={{ paddingTop: "15px" }}>
            Cine suntem?
          </Typography>
          <Typography
            level="body-lg"
            fontWeight="md"
            sx={{
              width: { xs: "350px", sm: "345px", md: "500px" },
              paddingTop: "15px",
            }}
          >
            La început, E20 a fost un mic magazin online, specializat în produse
            electro-IT. De atunci și până astăzi, timp de 20 de ani am căutat în
            fiecare zi să ajungem mai departe și să facem mereu lucrurile mai
            bine. Cu o misiune clară pentru clienții și partenerii noștri, dar
            și pentru comunitățile în care activăm: să punem la dispoziția
            tuturor servicii și produse care să le susțină progresul atât la
            nivel individual, cât și la nivel de societate.
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            width: { xs: "350px", sm: "345px", md: "1000px" },
            marginTop: { xs: "0px", md: "25px" },
            padding: "25px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography level="h1">Meet the team</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "15px",
              width: "700px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                margin: "15px",
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
                    marginTop: "5px",
                    marginBottom: "5px",
                    backgroundColor: "red",
                  }}
                ></div>
                <Typography sx={{ width: "200px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  laborum totam ab blanditiis vero aliquam possimus amet minima
                  quam, sapiente eum!
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
                <Typography level="body-md">Senior Product Designer</Typography>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    width: "40px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    backgroundColor: "red",
                  }}
                ></div>
                <Typography sx={{ width: "200px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  laborum totam ab blanditiis vero aliquam possimus amet minima
                  quam, sapiente eum!
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
                Arwen
              </Typography>
              <Typography level="body-md">Lead Purrgrammer</Typography>
              <div
                style={{
                  borderBottom: "1px solid black",
                  width: "40px",
                  marginTop: "5px",
                  marginBottom: "5px",
                  backgroundColor: "red",
                }}
              ></div>
              <Typography sx={{ width: "200px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum
                totam ab blanditiis vero aliquam possimus amet minima quam,
                sapiente eum!
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
              <Typography level="body-md">Senior Data Engineer</Typography>
              <div
                style={{
                  borderBottom: "1px solid black",
                  width: "40px",
                  marginTop: "5px",
                  marginBottom: "5px",
                  backgroundColor: "red",
                }}
              ></div>
              <Typography sx={{ width: "200px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum
                totam ab blanditiis vero aliquam possimus amet minima quam,
                sapiente eum!
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
              <Typography level="body-md">Product Manager</Typography>
              <div
                style={{
                  borderBottom: "1px solid black",
                  width: "40px",
                  marginTop: "5px",
                  marginBottom: "5px",
                  backgroundColor: "red",
                }}
              ></div>
              <Typography sx={{ width: "200px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum
                totam ab blanditiis vero aliquam possimus amet minima quam,
                sapiente eum!
              </Typography>
            </Box>
          </Box>
          <Link to="#">
            <Button
              sx={{
                marginTop: "15px",
                backgroundImage:
                  "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);",
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
