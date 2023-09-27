import { Grid, Box, Typography, FormLabel, Button } from "@mui/joy";
import Navbar from "../components/Navbar";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F2F7",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Typography
          level="h1"
          sx={{
            textAlign: "center",
          }}
        >
          E20
          <Typography
            level=""
            sx={{
              fontWeight: "normal",
            }}
          >
            help
          </Typography>
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              width: { xs: "350px", sm: "345px", md: "700px" },
              padding: "20px",
            }}
          >
            <Typography
              level="h5"
              sx={{ paddingBottom: "10px", paddingTop: "10px" }}
            >
              Dacă doriți să luați legătura cu noi sau aveți întrebări, suntem
              aici pentru dumneavoastră. Puteți să ne contactați prin
              intermediul următoarelor metode:
            </Typography>

            <Typography level="h5" sx={{ fontWeight: "bold" }}>
              Adresa Noastră
            </Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "10px", paddingTop: "10px" }}
            >
              Ne găsiți la adresa: Strada Imaginatiei, nr. 10-28, Creative
              Office Park, Emerald Tower, Bucuresti, Romania
            </Typography>
            <Typography level="h5" sx={{ fontWeight: "bold" }}>
              Program de Lucru
            </Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "10px", paddingTop: "10px" }}
            >
              Suntem disponibili pentru dumneavoastră de luni până vineri, între
              orele 9:00 și 18:00. Echipa noastră profesionistă este gata să vă
              asiste și să răspundă la întrebările dumneavoastră.
            </Typography>
            <Typography level="h5" sx={{ fontWeight: "bold" }}>
              Date de Contact
            </Typography>
            <Typography level="h5" sx={{ paddingTop: "10px" }}>
              Telefon: +40 123 456 789
            </Typography>
            <Typography level="h5" sx={{ paddingBottom: "10px" }}>
              E-mail: contact@e20.ro
            </Typography>
            <Typography level="h5" sx={{ fontWeight: "bold" }}>
              Localizare
            </Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "10px", paddingTop: "10px" }}
            >
              Suntem localizați în inima Bucureștiului, în apropiere de Soseaua
              Virtutii, în sectorul 6.
            </Typography>
            <Typography level="h5" sx={{ fontWeight: "bold" }}>
              Informații Despre Companie
            </Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "10px", paddingTop: "10px" }}
            >
              S.C. E20 International S.A. este o companie fictivă dedicată
              excelenței în domeniul nostru. Ne mândrim cu angajamentul nostru
              față de clienți și suntem pasionați să livrăm soluții de top.
            </Typography>
            <Typography level="h5" sx={{ fontWeight: "bold" }}>
              Ne Puteți Găsi
            </Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "10px", paddingTop: "10px" }}
            >
              Vă invităm să ne vizitați la sediul nostru sau să ne contactați.
              Suntem aici pentru a vă ajuta în fiecare pas al drumului.
            </Typography>
            <Typography level="h5" sx={{ fontWeight: "bold" }}>
              Rețele Sociale
            </Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "10px", paddingTop: "10px" }}
            >
              Puteți să ne urmăriți și să fiți la curent cu noutățile noastre pe
              rețelele sociale. Ne găsiți pe <Link to="#">Facebook</Link>,
              <Link to="#">Twitter</Link> și <Link to="#">LinkedIn.</Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "16px",
              width: { xs: "350px", sm: "345px", md: "700px" },
              padding: "20px",
            }}
          >
            <form
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <FormLabel sx={{ fontSize: "20px", marginBottom: "5px" }}>
                Nume și prenume:
              </FormLabel>
              <Input
                sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
                type="text"
              />
              <FormLabel sx={{ fontSize: "20px", marginBottom: "5px" }}>
                Adresa de email:
              </FormLabel>
              <Input
                sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
                type="email"
                required
              />
              <FormLabel sx={{ fontSize: "20px", marginBottom: "5px" }}>
                Scrie mesajul aici:
              </FormLabel>
              <Textarea
                sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
                size="md"
                minRows={5}
              />
            </form>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button size="md" sx={{ width: "100px" }}>
                Trimite
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
export default ContactPage;
