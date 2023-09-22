import { Grid, Box, Typography } from "@mui/joy";
import Navbar from "../components/Navbar";

const ContactPage = () => {
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
        <Typography level="h1">
          E20
          <span style={{ fontSize: "25px", fontWeight: "normal" }}>help</span>
        </Typography>
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
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "700px" }}
          >
            <Typography level="h3">Informații de Contact</Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "20px", paddingTop: "15px" }}
            >
              Dacă doriți să luați legătura cu noi sau aveți întrebări, suntem
              aici pentru dumneavoastră. Puteți să ne contactați prin
              intermediul următoarelor metode:
            </Typography>

            <Typography level="h3">Adresa Noastră</Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "20px", paddingTop: "15px" }}
            >
              Ne găsiți la adresa: Strada Imaginatiei, nr. 10-28, Creative
              Office Park, Emerald Tower, Bucuresti, Romania
            </Typography>
            <Typography level="h3">Program de Lucru</Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "20px", paddingTop: "15px" }}
            >
              Suntem disponibili pentru dumneavoastră de luni până vineri, între
              orele 9:00 și 18:00. Echipa noastră profesionistă este gata să vă
              asiste și să răspundă la întrebările dumneavoastră.
            </Typography>
            <Typography level="h3">Formular de Contact</Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "20px", paddingTop: "15px" }}
            >
              Puteți, de asemenea, să ne trimiteți un mesaj direct folosind
              formularul nostru de contact de mai jos. Vă vom răspunde în cel
              mai scurt timp posibil.
            </Typography>
            <Typography level="h3">Date de Contact</Typography>
            <Typography level="h5" sx={{ paddingTop: "15px" }}>
              Telefon: +40 123 456 789
            </Typography>
            <Typography
              level="h5"
              sx={{ paddingBottom: "20px", paddingTop: "10px" }}
            >
              E-mail: contact@e20.ro
            </Typography>
            <Typography level="h3">Localizare</Typography>
            <Typography sx={{ paddingBottom: "20px", paddingTop: "15px" }}>
              Suntem localizați în inima Bucureștiului, în apropiere de Soseaua
              Virtutii, în sectorul 6.
            </Typography>
            <Typography level="h3">Informații Despre Companie</Typography>
            <Typography sx={{ paddingBottom: "20px", paddingTop: "15px" }}>
              S.C. E20 International S.A. este o companie fictivă dedicată
              excelenței în domeniul nostru. Ne mândrim cu angajamentul nostru
              față de clienți și suntem pasionați să livrăm soluții de top.
            </Typography>
            <Typography level="h3">Ne Puteți Găsi</Typography>
            <Typography sx={{ paddingBottom: "20px", paddingTop: "15px" }}>
              Vă invităm să ne vizitați la sediul nostru sau să ne contactați.
              Suntem aici pentru a vă ajuta în fiecare pas al drumului.
            </Typography>
            <Typography level="h3">Rețele Sociale</Typography>
            <Typography sx={{ paddingBottom: "20px", paddingTop: "15px" }}>
              Puteți să ne urmăriți și să fiți la curent cu noutățile noastre pe
              rețelele sociale. Ne găsiți pe Facebook, Twitter și LinkedIn.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
export default ContactPage;