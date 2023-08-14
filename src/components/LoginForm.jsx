import { Button, Typography, Box, FormLabel } from "@mui/joy";
import Input from "@mui/joy/Input";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/joy/Alert";
import WarningIcon from "@mui/icons-material/Warning";

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
      const result = await axios.post("http://161.35.202.134:3000/login", {
        email: email,
        password: password,
      });
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
          startDecorator={<EmailIcon />}
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
          startDecorator={<VpnKeyIcon />}
          type="password"
          placeholder="********"
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
            variant="outlined"
            onClick={() => {
              setFormState(true);
            }}
          >
            Register
          </Button>
        </Box>
      </form>
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
