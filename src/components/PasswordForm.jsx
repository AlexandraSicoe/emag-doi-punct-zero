import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import WarningIcon from "@mui/icons-material/Warning";
import { Box, Button, FormLabel, Typography } from "@mui/joy";
import Alert from "@mui/joy/Alert";
import Input from "@mui/joy/Input";
import { useState } from "react";
const PasswordForm = ({ setFormState }) => {
  const [email, setEmail] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "130px 70px 130px 70px",
        backgroundColor: "white",
        border: "1px solid white",
        borderRadius: "25px",
      }}
    >
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
      <Typography level="h2" sx={{ paddingBottom: "30px", color: "#1E90FF" }}>
        Ați uitat parola?
      </Typography>
      <FormLabel>
        <Typography level="h3" sx={{ paddingBottom: "15px", color: "black" }}>
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
  );
};
export default PasswordForm;
