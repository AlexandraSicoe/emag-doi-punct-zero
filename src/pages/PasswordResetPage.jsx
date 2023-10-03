import VpnKeyIcon from "@mui/icons-material/VpnKey";
import WarningIcon from "@mui/icons-material/Warning";
import { Box, Button, FormLabel, Typography } from "@mui/joy";
import Alert from "@mui/joy/Alert";
import Input from "@mui/joy/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const PasswordResetPage = ({ setFormState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Check if passwords match when the password field changes
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Check if passwords match when the confirm password field changes
    setPasswordsMatch(e.target.value === password);
  };
  useEffect(() => {
    if (errorMessage.length > 0) {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }, [errorMessage]);
  const navigate = useNavigate();
  const loginUser = async () => {
    try {
      const result = await axios.post(
        "https://e20.ro/api/user/login",
        {
          email: email,
          password: password,
        }
        // { Authorization: "Bearer " + token }
      );

      console.log(result);
      localStorage.setItem("user", JSON.stringify(result?.data?.user));
      navigate("/");
    } catch (error) {
      console.error(error.response.data.error);
      const errorMessage = error?.response?.data?.error;
      if (errorMessage) {
        setErrorMessage(errorMessage);
      }
    }
  };
  return (
    <Box
      display="flex"
      sx={{
        backgroundImage: {
          xs:
            "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
          md: "none",
        },
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        m: 0,
        p: 0,
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: "0px", md: "50%" },
          backgroundImage: {
            xs: "none",
            md:
              "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
          },
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundColor: { xs: "rgba(255,255,255,0.3)", md: "transparent" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography level="h1" sx={{ mb: 1 }}>
            Resetează parola{" "}
          </Typography>
          <FormLabel>Vă rugăm să introduceți noua parolă</FormLabel>
          <Input
            startDecorator={<VpnKeyIcon />}
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={handlePasswordChange}
            sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
          />
          <FormLabel>Confirmați noua parolă</FormLabel>
          <Input
            startDecorator={<VpnKeyIcon />}
            type="password"
            placeholder="••••••••"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
          />

          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Button
              size="sm"
              onClick={() => {
                if (passwordsMatch) {
                  // api call to change password
                } else {
                  setErrorMessage("Parolele nu coincid.");
                }
              }}
            >
              Schimbă parola
            </Button>
          </Box>
        </Box>
      </Box>
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
    </Box>
  );
};
export default PasswordResetPage;
