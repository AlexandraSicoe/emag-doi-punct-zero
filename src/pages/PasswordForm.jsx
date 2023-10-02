import EmailIcon from "@mui/icons-material/Email";
import { Box, FormLabel, Typography } from "@mui/joy";
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
        backgroundColor: { xs: "rgba(255,255,255,0.3)", md: "transparent" },
      }}
    >
      <Typography level="h2">
        Vă rugăm să vă scrieți adresa de email:
      </Typography>
      <FormLabel>
        <Typography level="h3">Email</Typography>
      </FormLabel>
      <Input
        startDecorator={<EmailIcon />}
        type="email"
        placeholder="Adresa dvs. de email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
      />
    </Box>
  );
};
export default PasswordForm;
