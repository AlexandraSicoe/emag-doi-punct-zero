import { Box, Button, Typography } from "@mui/joy";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import PasswordForm from "../components/PasswordForm";

const LoginRegisterPage = () => {
  const [formState, setFormState] = useState("Login");
  return (
    <Box
      display="flex"
      sx={{
        backgroundImage: {
          xs:
            "url(https://images.unsplash.com/photo-1612979148245-d8c79c50935d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
          width: { xs: "0px", sm: "0px", md: "50%" },
          backgroundImage: {
            xs: "none",
            sm: "none",
            md:
              "url(https://images.unsplash.com/photo-1612979148245-d8c79c50935d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
          backgroundColor: { xs: "rgba(0,0,0,0.25)", md: "transparent" },
        }}
      >
        {console.log(formState)}
        {formState === "Register" ? (
          <RegisterForm setFormState={setFormState} />
        ) : formState === "Login" ? (
          <LoginForm setFormState={setFormState} />
        ) : (
          <PasswordForm setFormState={setFormState} />
        )}
      </Box>
    </Box>
  );
};
export default LoginRegisterPage;
