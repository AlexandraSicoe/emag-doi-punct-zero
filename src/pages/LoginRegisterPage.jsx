import { Box } from "@mui/joy";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

const LoginRegisterPage = () => {
  const [formState, setFormState] = useState(false);
  return (
    <Box
      display="flex"
      sx={{
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
          width: "50%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "50%" }}
      >
        {formState ? (
          <RegisterForm setFormState={setFormState} />
        ) : (
          <LoginForm setFormState={setFormState} />
        )}
      </Box>
    </Box>
  );
};
export default LoginRegisterPage;
