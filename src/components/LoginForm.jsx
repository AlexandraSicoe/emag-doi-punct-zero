import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import WarningIcon from "@mui/icons-material/Warning";
import { Box, Button, FormLabel, Typography } from "@mui/joy";
import Alert from "@mui/joy/Alert";
import Input from "@mui/joy/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setFormState }) => {
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
    <Box display="flex" flexDirection="column">
      <Typography level="h1" sx={{ mb: 1 }}>
        Login
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          loginUser();
        }}
      >
        <FormLabel>Email</FormLabel>
        <Input
          startDecorator={<EmailIcon sx={{ color: "#8b5cf6" }} />}
          type="email"
          placeholder="john.doe@email.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
        />
        <FormLabel>Password</FormLabel>

        <Input
          startDecorator={<VpnKeyIcon sx={{ color: "#8b5cf6" }} />}
          type="password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
        />
        <Box display="flex" justifyContent="space-between">
          <Button type="submit">Login</Button>
          <Button
            sx={{
              backgroundColor: { xs: "white", md: "transparent" },
            }}
            variant="outlined"
            onClick={() => {
              setFormState("Register");
            }}
          >
            Register
          </Button>
        </Box>
      </form>
      <Box>
        <Typography
          sx={{
            paddingTop: "5px",
            fontSize: "15px",
            color: "#1E90FF",
            "&:hover": {
              color: "#00308F",
            },
          }}
        >
          Ai uitat parola?{" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              setFormState("Password");
            }}
          >
            Click aici.
          </span>
        </Typography>
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
export default LoginForm;
