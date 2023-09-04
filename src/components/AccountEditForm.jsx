import Input from "@mui/joy/Input";
import Radio from "@mui/joy/Radio";
import Navbar from "../components/Navbar";
import ListItem from "@mui/joy/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import ReviewsIcon from "@mui/icons-material/Reviews";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect } from "react";
import { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  ListItemButton,
  ListItemDecorator,
  List,
  FormLabel,
  Button,
} from "@mui/joy";
import * as React from "react";
const AccountEditForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
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
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: { xs: "center", md: "end" },
        marginTop: { xs: "10px", md: "40px" },
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
      <Typography level="h3" mt={2} mb={2}>
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
  );
};
export default AccountEditForm;
