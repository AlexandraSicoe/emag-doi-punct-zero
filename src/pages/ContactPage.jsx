import { Grid, Box, Typography, FormLabel, Button } from "@mui/joy";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/joy/Alert";
import WarningIcon from "@mui/icons-material/Warning";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "25px",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              // width: { xs: "100%", sm: "100%", md: "1000px" },
              width: { xs: "100%", lg: "1000px" },
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "10px",
                display: { xs: "none", sm: "flex" },
              }}
            >
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
                    marginRight: { xs: "20px", md: "0px" },
                  }}
                >
                  help
                </Typography>
              </Typography>
              <FacebookRoundedIcon
                sx={{
                  width: "50px",
                  height: "50px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.8)",
                    color: "blue",
                  },
                }}
              />

              <LocationOnRoundedIcon
                sx={{
                  width: "50px",
                  height: "50px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.8)",
                    color: "red",
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  width: "50px",
                  height: "50px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.8)",
                    color: "blue",
                  },
                }}
              />
              <InstagramIcon
                sx={{
                  width: "50px",
                  height: "50px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.8)",
                    color: "purple",
                  },
                }}
              />
              <WhatsAppIcon
                sx={{
                  width: "50px",
                  height: "50px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.8)",
                    color: "green",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "white",
                borderRadius: "16px",
                width: { xs: "100%", sm: "100%", md: "1000px" },
                padding: "20px",
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
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              width: { xs: "100%", sm: "100%", md: "900px" },
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px",
                display: { xs: "flex", sm: "none" },
              }}
            >
              <Typography
                level="h3"
                sx={{
                  textAlign: "center",
                }}
              >
                E20
                <Typography
                  level="body-lg"
                  sx={{
                    fontWeight: "normal",
                    marginRight: { xs: "10px", md: "0px" },
                  }}
                >
                  help
                </Typography>
              </Typography>
              <FacebookRoundedIcon
                sx={{
                  width: "40px",
                  height: "40px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: { xs: "scale(1.1)", sm: "scale(1.8)" },
                    color: "blue",
                  },
                }}
              />

              <LocationOnRoundedIcon
                sx={{
                  width: "40px",
                  height: "40px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: { xs: "scale(1.1)", sm: "scale(1.8)" },
                    color: "red",
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  width: "40px",
                  height: "40px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: { xs: "scale(1.1)", sm: "scale(1.8)" },
                    color: "blue",
                  },
                }}
              />
              <InstagramIcon
                sx={{
                  width: "40px",
                  height: "40px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: { xs: "scale(1.1)", sm: "scale(1.8)" },
                    color: "purple",
                  },
                }}
              />
              <WhatsAppIcon
                sx={{
                  width: "40px",
                  height: "40px",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    transform: { xs: "scale(1.1)", sm: "scale(1.8)" },
                    color: "green",
                  },
                }}
              />
            </Box>{" "}
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "16px",
              width: { xs: "100%", sm: "100%", md: "1000px" },
              padding: "20px",
              marginTop: { xs: "10px", md: "25px" },
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
              <Grid xs={12} md={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", sm: "100%", md: "250px" },
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
              <Grid xs={12} md={3}>
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
                  <Typography level="body-md" sx={{ textAlign: "center" }}>
                    Telefon: +40 123 456 789
                  </Typography>
                  <Typography level="body-md" sx={{ textAlign: "center" }}>
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
