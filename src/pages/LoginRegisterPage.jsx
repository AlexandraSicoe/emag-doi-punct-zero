import { Box, Button, Typography } from "@mui/joy";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import PasswordForm from "../components/PasswordForm";

const LoginRegisterPage = () => {
  const [formState, setFormState] = useState(false);
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
        {formState === "Register" ? (
          <RegisterForm setFormState={setFormState} />
        ) : formState === "Login" ? (
          <LoginForm setFormState={setFormState} />
        ) : (
          <PasswordForm setFormState={setFormState} />
        )}
        <Box>
          <Typography
            sx={{
              paddingTop: "5px",
              fontSize: "15px",
              color: "#1E90FF",
              "&:hover": {
                textDecoration: "underline",
                color: "#00308F",
              },
            }}
          >
            Ai uitat parola?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default LoginRegisterPage;
