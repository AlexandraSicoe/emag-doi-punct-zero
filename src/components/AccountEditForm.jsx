import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Box, Button, FormLabel, Typography } from "@mui/joy";
import Input from "@mui/joy/Input";
import Option from "@mui/joy/Option";
import Radio from "@mui/joy/Radio";
import Select from "@mui/joy/Select";
import * as React from "react";
import { useEffect } from "react";
const AccountEditForm = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    let lsUser = localStorage.getItem("user");
    lsUser = JSON.parse(lsUser);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          justifyContent: { xs: "center", md: "start" },
          marginTop: { xs: "10px", md: "24px" },
          paddingBottom: "25px",
          paddingLeft: "10px",
          paddingRight: "10px",
          width: {
            xs: "350px",
            sm: "345px",
            md: "500px",
            borderRadius: "16px",
          },
        }}
      >
        <Typography level="h3" mb={2}>
          Administrare date
        </Typography>
        <form>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              label="Dl."
              name="radio-buttons"
              slotProps={{ input: { "aria-label": "A" } }}
            />
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              label="Dna."
              name="radio-buttons"
              slotProps={{ input: { "aria-label": "B" } }}
            />
          </Box>

          <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
            Nume si prenume:
          </FormLabel>
          <Input startDecorator={<PersonIcon />} type="text" sx={{ mb: 1 }} />
          <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
            Email nou:
          </FormLabel>
          <Input startDecorator={<EmailIcon />} type="text" sx={{ mb: 1 }} />
          <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
            Parola noua:
          </FormLabel>
          <Input startDecorator={<VpnKeyIcon />} type="text" sx={{ mb: 1 }} />

          <Box
            backgroundColor="white"
            display="flex"
            justifyContent="space-between"
            mb={2}
          >
            <Select sx={{ width: "100px" }} placeholder="Ziua">
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
            </Select>
            <Select sx={{ width: "100px" }} placeholder="Luna">
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
            </Select>
            <Select sx={{ width: "100px" }} placeholder="Anul">
              <Option>1990</Option>
              <Option>1991</Option>
              <Option>1992</Option>
            </Select>
          </Box>

          <Button size="lg" sx={{ textAlign: "center" }}>
            Salveaza informatiile
          </Button>
        </form>
      </Box>
      <Box
        sx={{
          marginTop: { xs: "10px", md: "24px" },
          paddingLeft: "10px",
          width: {
            xs: "350px",
            sm: "345px",
            md: "400px",
          },
          display: { xs: "none", sm: "block", md: "block" },
        }}
      >
        <img
          style={{ width: "100%", height: "100%", borderRadius: "16px" }}
          src="https://images.unsplash.com/photo-1635405054100-efa6dbf09b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80"
        />
      </Box>
    </Box>
  );
};
export default AccountEditForm;
