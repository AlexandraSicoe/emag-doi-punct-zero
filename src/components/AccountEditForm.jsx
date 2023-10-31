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
  function getMaxDate() {
    const currentDate = new Date();
    const maxDate = new Date(currentDate);
    maxDate.setFullYear(currentDate.getFullYear() - 18);
    return maxDate.toISOString().slice(0, 10);
  }
  const maxDate18YearsAgo = getMaxDate();
  useEffect(() => {
    let lsUser = localStorage.getItem("user");
    lsUser = JSON.parse(lsUser);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        width: "100%",
        marginTop: "25px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          justifyContent: { xs: "center", md: "start" },
          marginLeft: { xs: "0px", md: "25px" },
          padding: "25px",
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            borderRadius: "16px",
          },
        }}
      >
        <Typography level="h3" mb={2}>
          Administrare date
        </Typography>
        <form>
          <Box display="flex" justifyContent="start" mb={2}>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              label="Dl."
              name="radio-buttons"
              slotProps={{ input: { "aria-label": "A" } }}
              sx={{ marginRight: "50px" }}
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
          <Input
            startDecorator={<PersonIcon sx={{ color: "#8b5cf6" }} />}
            type="text"
            sx={{ mb: 1 }}
          />
          <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
            Email nou:
          </FormLabel>
          <Input
            startDecorator={<EmailIcon sx={{ color: "#8b5cf6" }} />}
            type="text"
            sx={{ mb: 1 }}
          />
          <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
            Parola noua:
          </FormLabel>
          <Input
            startDecorator={<VpnKeyIcon sx={{ color: "#8b5cf6" }} />}
            type="text"
            sx={{ mb: 1 }}
          />

          <Box
            backgroundColor="white"
            display="flex"
            justifyContent="start"
            mb={2}
          >
            <Input
              type="date"
              slotProps={{
                input: {
                  min: "2018-06-07T00:00",
                  max: maxDate18YearsAgo,
                },
              }}
            />
          </Box>

          <Button size="lg" sx={{ textAlign: "center" }}>
            Salveaza informatiile
          </Button>
        </form>
      </Box>
      {/* <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
          },
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            filter: "grayscale(30%)",
            opacity: "0.9",
          }}
          src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
        />
      </Box> */}
    </Box>
  );
};
export default AccountEditForm;
