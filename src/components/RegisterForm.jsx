import { Button, Typography, Box, FormLabel } from "@mui/joy";
import Input from "@mui/joy/Input";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

import VpnKeyIcon from "@mui/icons-material/VpnKey";
import axios from "axios";
const RegisterForm = ({ setFormState }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async () => {
    try {
      console.log(name, password, email);
      const result = await axios.post("http://161.35.202.134:3000/register", {
        name: name,
        password: password,
        email: email,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
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
          placeholder="********"
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
    </Box>
  );
};
export default RegisterForm;
