import EmailIcon from "@mui/icons-material/Email";
import { Box, Button, FormLabel, Typography } from "@mui/joy";
import Input from "@mui/joy/Input";
import { useState } from "react";
const PasswordForm = () => {
  const [email, setEmail] = useState("");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        height: "100vh",
        backgroundColor: "#1E90FF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "130px 70px 130px 70px",
          backgroundColor: "white",
        }}
      >
        <Typography level="h2" sx={{ paddingBottom: "30px", color: "#1E90FF" }}>
          Ați uitat parola?
        </Typography>
        <FormLabel>
          <Typography
            level="h3"
            sx={{ paddingBottom: "15px", color: "#FA8072" }}
          >
            Vă rugăm să vă scrieți adresa de email:
          </Typography>
        </FormLabel>
        <Input
          startDecorator={<EmailIcon sx={{ color: "#FA8072" }} />}
          type="email"
          placeholder="Adresa dvs. de email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sx={{ mb: 1, width: "100%", marginBottom: "30px", color: "#FF0000" }}
        />
        <Button size="lg">Resetează parola</Button>
      </Box>
    </Box>
  );
};
export default PasswordForm;
