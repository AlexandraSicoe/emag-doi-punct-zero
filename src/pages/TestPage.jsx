import React, { useState } from "react";
import ReactDOM from "react-dom";
import Avatar from "react-avatar-edit";
import { Box, Grid, Typography } from "@mui/joy";
import AdoptionBanner from "../images/adoption_banner.png";
import Logo from "../images/logo.png";
import AdoptionLogo from "../images/LogoAdapost.png";
const TestPage = () => {
  const [imageFile, setImageFile] = useState(null);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // flexWrap: "wrap",
        // height: { xs: "700px", md: "500px" },
        // backgroundPosition: "top",
        backgroundImage: `url(${AdoptionBanner})`,
        backgroundSize: "cover",
        color: "white",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          level="title-lg"
          sx={{
            color: "white",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            maxWidth: "500px",
          }}
        >
          Descoperă Iubirea Adevărată: Adoptă un Prieten de Viață!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          level="body-md"
          sx={{
            color: "white",
            maxWidth: "500px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            width: { xs: "100%", md: "50%" },
            marginBottom: { xs: "20px", md: "0px" },
          }}
        >
          La
          <span style={{ fontWeight: "bold" }}> Adăpostul Inimă și Lăbuțe</span>
          , avem suflete adorabile în așteptare să-și găsească căminul fericit.
          Adoptă un prieten blănos astăzi cu sprijinul
          <span style={{ fontWeight: "bold" }}> E20</span> !
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          level="body-md"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            marginTop: "10px",
          }}
        >
          De ce să adopți cu E20:
        </Typography>
        <ul
          style={{
            paddingLeft: "20px",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li>
            <Typography
              level="body-md"
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                maxWidth: "600px",
              }}
            >
              Sponsorizăm adăposturi cu jucării, zgărzi și alte necesități,
              contribuind la binele general al comunității și la bunăstarea
              animalelor aflate în adăposturi.
            </Typography>
          </li>
          <li>
            <Typography
              level="body-md"
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                maxWidth: "600px",
              }}
            >
              Acoperim o parte din costurile pentru sterilizare și deparazitare,
              asigurând că fiecare animal adoptat este pregătit pentru o viață
              fericită și sănătoasă într-o nouă casă.
            </Typography>
          </li>
          <li>
            <Typography
              level="body-md"
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                maxWidth: "600px",
              }}
            >
              Prin adoptarea de la{" "}
              <span style={{ fontWeight: "bold" }}>E20 Petshop</span>, nu doar
              că aduci acasă un companion, ci și contribui la crearea de
              legături puternice și durabile cu animalele care merită o a doua
              șansă într-un cămin iubitor.
            </Typography>
          </li>
        </ul>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginTop: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              marginBottom: { xs: "15px", sm: "0px" },
            }}
          >
            <img
              style={{
                height: "50px",
                maxWidth: "70px",
                marginRight: "10px",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
              src={Logo}
              alt="E20 Logo"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "7px",
              }}
            >
              <Typography sx={{ color: "white", padding: "0px" }}>
                Telefon: +40 123 456 789
              </Typography>
              <Typography sx={{ color: "white", padding: "0px" }}>
                E-mail: contact@e20.ro
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              marginBottom: { xs: "15px", sm: "0px" },
            }}
          >
            <img
              style={{
                height: "90px",
                maxWidth: "90px",
                marginRight: "10px",
                marginLeft: "10px",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
              src={AdoptionLogo}
              alt="Adăpostul Inimă și Lăbuțe Logo"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ color: "white", marginTop: "7px", padding: "0px" }}
              >
                Telefon: 000-000-0000
              </Typography>
              <Typography sx={{ color: "white", padding: "0px" }}>
                E-mail: adopta@inimasilabute.ro
              </Typography>
              <Typography sx={{ color: "white", padding: "0px" }}>
                Site web: inimasilabute.ro
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestPage;
