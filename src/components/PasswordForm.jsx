import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import WarningIcon from "@mui/icons-material/Warning";
import { Box, Button, FormLabel, Typography } from "@mui/joy";
import Alert from "@mui/joy/Alert";
import Input from "@mui/joy/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const PasswordForm = ({ setFormState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography level="h1" sx={{ mb: 1 }}>
        Ați uitat parola?
      </Typography>
      <FormLabel>Vă rugăm să vă scrieți adresa de email</FormLabel>
      <FormLabel>Email</FormLabel>
      <Input
        startDecorator={<EmailIcon />}
        type="email"
        required
        placeholder="john.doe@email.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        sx={{ width: "100%", mb: 1 }}
      />
      <Box display="flex" justifyContent="space-between" sx={{ width: "100%" }}>
        <Button size="sm">Resetează parola</Button>
        <Link to="/administrare">
          <Button
            sx={{
              backgroundColor: { xs: "white", md: "transparent" },
            }}
            variant="outlined"
            size="sm"
          >
            Înapoi
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default PasswordForm;
