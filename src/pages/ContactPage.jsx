import { Grid, Box, Typography, FormLabel, Button } from "@mui/joy";
import Navbar from "../components/Navbar";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/joy/Alert";
import WarningIcon from "@mui/icons-material/Warning";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [buttonMessage, setButtonMessage] = useState("");

  useEffect(() => {
    if (errorMessage.length > 0) {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
    if (successMessage.length > 0) {
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
    if (buttonMessage.length > 0) {
      setTimeout(() => {
        setButtonMessage("");
      }, 3000);
    }
  }, [errorMessage, successMessage, buttonMessage]);
  const submitForm = async () => {
    try {
      if (name === "" || email === "" || message === "") {
        setButtonMessage("Completați formularul");
      } else {
        const result = await axios.post("https://e20.ro/api/user/contact", {
          name: name,
          email: email,
          message: message,
        });
        console.log(result);
        if (result.data.message === "Mesaj trimis cu success!") {
          setName("");
          setEmail("");
          setMessage("");
          setSuccessMessage(result.data.message);
        }
      }
    } catch (error) {
      console.error(error.response.data.error);
      const errorMessage = error?.response?.data?.error;
      if (errorMessage) {
        setErrorMessage(errorMessage);
      }
    }
  };
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
            paddingTop: "5px",
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
            p: 5,
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              m: 5,
              backgroundColor: "white",
              borderRadius: "16px",
              width: { xs: "350px", sm: "800px", md: "1000px" },
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box>
                <Typography
                  level="h5"
                  sx={{ fontWeight: "bold", width: "300px" }}
                >
                  Adresa Noastră
                </Typography>
              </Box>
              <Typography
                level="h5"
                sx={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  // width: { xs: "300px", md: "700px" },
                }}
              >
                Ne găsiți la adresa: Strada Imaginatiei, nr. 10-28, Creative
                Office Park, Emerald Tower, Bucuresti, Romania
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box>
                <Typography
                  level="h5"
                  sx={{ fontWeight: "bold", width: "300px!important" }}
                >
                  Program de Lucru
                </Typography>
              </Box>

              <Typography
                level="h5"
                sx={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  // width: { xs: "300px", md: "700px" },
                }}
              >
                Suntem disponibili pentru dumneavoastră de luni până vineri,
                între orele 9:00 și 18:00. Echipa noastră profesionistă este
                gata să vă asiste și să răspundă la întrebările dumneavoastră.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box>
                <Typography
                  level="h5"
                  sx={{ fontWeight: "bold", width: "300px!important" }}
                >
                  Date de Contact
                </Typography>
              </Box>
              <Typography
                level="h5"
                sx={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  // width: { xs: "300px", md: "700px" },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Telefon: +40 123 456 789
                <br />
                E-mail: contact@e20.ro
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box>
                <Typography
                  level="h5"
                  sx={{ fontWeight: "bold", width: "300px!important" }}
                >
                  Localizare
                </Typography>
              </Box>
              <Typography
                level="h5"
                sx={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                }}
              >
                Suntem localizați în inima Bucureștiului, în apropiere de
                Soseaua Virtutii, în sectorul 6.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box>
                <Typography
                  level="h5"
                  sx={{ fontWeight: "bold", width: "300px!important" }}
                >
                  Informații Despre Companie
                </Typography>
              </Box>
              <Typography
                level="h5"
                sx={{ paddingBottom: "10px", paddingTop: "10px" }}
              >
                S.C. E20 International S.A. este o companie fictivă dedicată
                excelenței în domeniul nostru. Ne mândrim cu angajamentul nostru
                față de clienți și suntem pasionați să livrăm soluții de top.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box>
                <Typography
                  level="h5"
                  sx={{ fontWeight: "bold", width: "300px!important" }}
                >
                  Ne Puteți Găsi
                </Typography>
              </Box>
              <Typography
                level="h5"
                sx={{ paddingBottom: "10px", paddingTop: "10px" }}
              >
                Vă invităm să ne vizitați la sediul nostru sau să ne contactați.
                Suntem aici pentru a vă ajuta în fiecare pas al drumului.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box>
                <Typography
                  level="h5"
                  sx={{ fontWeight: "bold", width: "300px!important" }}
                >
                  Rețele Sociale
                </Typography>
              </Box>
              <Typography
                level="h5"
                sx={{ paddingBottom: "10px", paddingTop: "10px" }}
              >
                Puteți să ne urmăriți și să fiți la curent cu noutățile noastre
                pe rețelele sociale. Ne găsiți pe <Link to="#">Facebook</Link>,
                <Link to="#">Twitter</Link> și <Link to="#">LinkedIn.</Link>
              </Typography>
            </Box>
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
              m: 5,
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitForm();
              }}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography
                level="h3"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "25px",
                }}
              >
                Formular de contact
              </Typography>
              <FormLabel sx={{ fontSize: "20px", marginBottom: "5px" }}>
                Nume și prenume:
              </FormLabel>
              <Input
                sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <FormLabel sx={{ fontSize: "20px", marginBottom: "5px" }}>
                Adresa de email:
              </FormLabel>
              <Input
                sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <FormLabel sx={{ fontSize: "20px", marginBottom: "5px" }}>
                Scrie mesajul aici:
              </FormLabel>
              <Textarea
                sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
                size="md"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                minRows={5}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  type="submit"
                  size="lg"
                  sx={{
                    width: "100px",
                    backgroundImage:
                      "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);",
                    color: "white!important",
                  }}
                >
                  Trimite
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
        {errorMessage.length > 0 && (
          <Alert
            startDecorator={<WarningIcon />}
            variant="solid"
            color="danger"
            sx={{ position: "fixed", bottom: "10px", right: "10px" }}
          >
            {errorMessage}
          </Alert>
        )}
        {successMessage.length > 0 && (
          <Alert
            startDecorator={<CheckCircleIcon />}
            variant="solid"
            color="success"
            sx={{ position: "fixed", bottom: "10px", right: "10px" }}
          >
            {successMessage}
          </Alert>
        )}
        {buttonMessage.length > 0 && (
          <Alert
            startDecorator={<WarningIcon />}
            variant="solid"
            color="warning"
            sx={{ position: "fixed", bottom: "10px", right: "10px" }}
          >
            {buttonMessage}
          </Alert>
        )}
      </Box>
    </>
  );
};
export default ContactPage;
