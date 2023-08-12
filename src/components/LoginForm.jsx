import { Button, Typography, Box, FormLabel } from "@mui/joy";
import Input from "@mui/joy/Input";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
const LoginForm = ({ setFormState }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography level="h1" sx={{ mb: 1 }}>
        Login
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <FormLabel>Email</FormLabel>
        <Input
          startDecorator={<EmailIcon />}
          type="email"
          placeholder="john.doe@email.com"
          required
          sx={{ mb: 1, fontSize: "var(--joy-fontSize-sm)" }}
        />
        <FormLabel>Password</FormLabel>

        <Input
          startDecorator={<VpnKeyIcon />}
          type="password"
          placeholder="********"
          required
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
    </Box>
  );
};
export default LoginForm;
