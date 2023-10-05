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
import MenuDropdown from "../components/MenuDropdown";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

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
        <MenuDropdown />
        <Box sx={{ marginTop: "25px" }}>
          <Typography
            level="h1"
            sx={{
              textAlign: "center",
            }}
          >
            E20
            <Typography
              level="body-lg"
              sx={{
                fontWeight: "normal",
              }}
            >
              help
            </Typography>
          </Typography>
        </Box>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            marginTop: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "16px",
              width: { xs: "100%", sm: "345px", md: "700px" },
              padding: "20px",
              marginBottom: { xs: "25px", md: "0px" },
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
                level="title-lg"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "25px",
                }}
              >
                Formular de contact
              </Typography>
              <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
                Nume și prenume:
              </FormLabel>
              <Input
                startDecorator={<PersonIcon sx={{ color: "#8b5cf6" }} />}
                placeholder="eg. John Doe"
                sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
                Adresa de email:
              </FormLabel>
              <Input
                startDecorator={<EmailIcon sx={{ color: "#8b5cf6" }} />}
                sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
                type="email"
                placeholder="john.doe@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
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
                    color: "white!important",
                  }}
                >
                  Trimite
                </Button>
              </Box>
            </form>
          </Box>
          <Grid
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              width: { xs: "100%", sm: "800px", md: "1000px" },
              padding: "20px",
              marginBottom: "25px",
            }}
          >
            <Grid
              container
              rowSpacing={5}
              spacing={3}
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", md: "250px" },
                  }}
                >
                  <i
                    style={{
                      fontSize: "60px",
                      color: "lightgray",
                      paddingBottom: "10px",
                    }}
                    class="fa-solid fa-briefcase"
                  ></i>
                  <Box>
                    <Typography
                      level="title-md"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Informații Despre Companie
                    </Typography>
                  </Box>
                  <Box>
                    <Typography level="body-md" sx={{ textAlign: "center" }}>
                      S.C. E20 International S.A. este o companie fictivă
                      dedicată excelenței în domeniul nostru.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", md: "250px" },
                  }}
                >
                  <i
                    class="fa-solid fa-location-dot"
                    style={{
                      fontSize: "60px",
                      color: "lightgray",
                      paddingBottom: "10px",
                    }}
                  ></i>
                  <Box>
                    <Typography
                      level="title-md"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Adresa Noastră
                    </Typography>
                  </Box>
                  <Typography level="body-md" sx={{ textAlign: "center" }}>
                    Strada Imaginatiei, nr. 10-28, Creative Office Park, Emerald
                    Tower,
                  </Typography>

                  <Typography level="body-md" sx={{ textAlign: "center" }}>
                    Bucuresti, Romania
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", md: "250px" },
                  }}
                >
                  <i
                    class="fa-solid fa-clock"
                    style={{
                      fontSize: "60px",
                      color: "lightgray",
                      paddingBottom: "10px",
                    }}
                  ></i>
                  <Box>
                    <Typography
                      level="title-md"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Program de Lucru
                    </Typography>
                  </Box>
                  <Typography level="body-md" sx={{ textAlign: "center" }}>
                    Luni- vineri
                  </Typography>
                  <Typography level="body-md" sx={{ textAlign: "center" }}>
                    9:00-18:00.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", md: "250px" },
                  }}
                >
                  <i
                    style={{
                      fontSize: "60px",
                      color: "lightgray",
                      paddingBottom: "10px",
                    }}
                    class="fa-solid fa-user"
                  ></i>
                  <Box>
                    <Typography
                      level="title-md"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Date de Contact
                    </Typography>
                  </Box>
                  <Typography evel="body-md" sx={{ textAlign: "center" }}>
                    Telefon: +40 123 456 789
                  </Typography>
                  <Typography evel="body-md" sx={{ textAlign: "center" }}>
                    E-mail: contact@e20.ro
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", md: "250px" },
                  }}
                >
                  <i
                    style={{
                      fontSize: "60px",
                      color: "lightgray",
                      paddingBottom: "10px",
                    }}
                    class="fa-solid fa-heart"
                  ></i>
                  <Box>
                    <Typography
                      level="title-md"
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      Rețele Sociale
                    </Typography>
                  </Box>
                  <Box>
                    <Typography level="body-md" sx={{ textAlign: "center" }}>
                      Ne găsiți pe <Link to="#">Facebook</Link>,
                      <Link to="#">Twitter</Link> și{" "}
                      <Link to="#">LinkedIn.</Link>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
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
