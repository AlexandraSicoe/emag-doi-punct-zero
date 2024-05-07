import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Box, Button, FormLabel, Typography } from "@mui/joy";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "@mui/joy/Input";
import Option from "@mui/joy/Option";
import Radio from "@mui/joy/Radio";
import Select from "@mui/joy/Select";
import * as React from "react";
import { useEffect } from "react";

const AccountEditForm = () => {
  const [phone, setPhone] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const placeholders = {
    a: {
      name: "Popescu Ioan",
      email: "popescuioan@gmail.com",
    },
    b: {
      name: "Popescu Ioana",
      email: "popescuioana@gmail.com",
    },
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
            placeholder={placeholders[selectedValue].name}
            startDecorator={<PersonIcon sx={{ color: "#8b5cf6" }} />}
            type="text"
            sx={{ mb: 1 }}
          />
          <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
            Email nou:
          </FormLabel>
          <Input
            placeholder={placeholders[selectedValue].email}
            startDecorator={<EmailIcon sx={{ color: "#8b5cf6" }} />}
            type="text"
            sx={{ mb: 1 }}
          />
          <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
            Parola noua:
          </FormLabel>
          <Input
            placeholder={"••••••"}
            startDecorator={<VpnKeyIcon sx={{ color: "#8b5cf6" }} />}
            type="text"
            sx={{ mb: 1 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
              Telefon:{" "}
            </FormLabel>

            <PhoneInput
              defaultCountry="ro"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              style={{ marginBottom: "5px", width: "100%" }}
            />
          </Box>
          <Box
            backgroundColor="white"
            display="flex"
            justifyContent="start"
            flexDirection="column"
            mb={2}
          >
            <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
              Data de naștere:
            </FormLabel>
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
    </Box>
  );
};
export default AccountEditForm;
