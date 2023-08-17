import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import WarningIcon from "@mui/icons-material/Warning";
import { Box, Button, FormLabel, Typography } from "@mui/joy";
import Alert from "@mui/joy/Alert";
import Input from "@mui/joy/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ setFormState }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (errorMessage.length > 0) {
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  }, [errorMessage]);
  const registerUser = async () => {
    try {
      console.log(name, password, email);
      const result = await axios.post(
        "http://161.35.202.134:3000/users/register",
        {
          name: name.trim(), //trims unnecessary spaces from start and finish
          password: password,
          email: email,
        }
      );
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result?.data?.user));
      navigate("/");
    } catch (error) {
      console.error(error);
      const errorMessage = error?.response?.data?.error;
      if (
        errorMessage ==
        "User validation failed: password: Password should have at least one uppercase character, one number, and one special character, and be minimum 8 characters long."
      ) {
        setErrorMessage(
          "Password should have at least one uppercase character, one number, and one special character, and be minimum 8 characters long."
        ); //ca sa punem eroarea in state ul de error message
      }
      if (errorMessage == "Email is already registered.") {
        setErrorMessage(errorMessage);
      }
    }
  };
  return (
    <Box display="flex" flexDirection="column">
      <Typography level="h1" sx={{ mb: 1 }}>
        Register
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          registerUser();
        }}
      >
        <FormLabel>Name</FormLabel>
        <Input
          startDecorator={<PersonIcon />}
          type="text"
          placeholder="John Doe"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
        />
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
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
        />
        <Box display="flex" justifyContent="space-between">
          <Button type="submit">Register</Button>
          <Button
            variant="outlined"
            onClick={() => {
              setFormState(false);
            }}
          >
            Login
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
export default RegisterForm;
