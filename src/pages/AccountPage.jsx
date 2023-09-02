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
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();
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
    <>
      <Navbar />
      <Grid
        p={2}
        backgroundColor="#F2F2F7"
        display="flex"
        justifyContent="center"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <Grid
          display="flex"
          sx={{
            flexDirection: "column",
            borderRadius: "16px",
            backgroundColor: "white",
            width: { xs: "350px", sm: "345px", md: "400px" },
            marginTop: { xs: "0px", md: "25px" },
          }}
        >
          <Grid
            sx={{
              padding: "25px",
              backgroundImage:
                "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="profile picture"
              style={{
                borderRadius: "50%",
                height: "75px",
                width: "75px",
                objectFit: "cover",
                marginRight: "20px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <Typography level="h4" sx={{ color: "white" }}>
                Anca Chelaru
              </Typography>
              <Typography level="h6">Client eMAG de 2 ani</Typography>
            </Box>
          </Grid>
          <List>
            <ListItem>
              <ListItemButton variant="plain">
                <ListItemDecorator>
                  <HomeIcon />
                </ListItemDecorator>
                Home
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <PersonIcon />
              </ListItemDecorator>
              <ListItemButton
                variant="plain"
                onClick={() => setIsFormVisible(!isFormVisible)}
              >
                {isFormVisible ? "Account" : " Account"}
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton variant="plain">
                <ListItemDecorator>
                  <InventoryIcon />
                </ListItemDecorator>
                My orders
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton variant="plain">
                <ListItemDecorator>
                  <ReviewsIcon />
                </ListItemDecorator>
                My reviews
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                variant="plain"
                onClick={() => {
                  localStorage.setItem("user", "[]");
                  navigate("/administrare");
                }}
              >
                <ListItemDecorator>
                  <LogoutIcon />
                </ListItemDecorator>
                Log Out
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid
          m={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          backgroundColor="#F2F2F7"
          sx={{
            borderRadius: "16px",
          }}
        >
          <Grid
            sx={{
              padding: "25px",
              backgroundColor: "white",
              width: {
                xs: "350px",
                sm: "345px",
                md: "500px",
                borderRadius: "16px",
              },
            }}
          >
            <Typography level="h3">Datele contului:</Typography>
            <Box display="flex" justifyContent="row">
              <Box
                sx={{
                  justifyContent: { xs: "center", md: "end" },
                  marginTop: { xs: "10px", md: "40px" },
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="profile picture"
                  style={{
                    borderRadius: "50%",
                    height: "100px",
                    width: "100px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                sx={{
                  justifyContent: { xs: "center", md: "end" },
                  marginTop: { xs: "10px", md: "45px" },
                  marginLeft: { xs: "10px", md: "40px" },
                }}
              >
                <Typography level="body1" mb={1}>
                  <span style={{ fontWeight: "bold" }}>Nume:</span> Anca Chelaru
                </Typography>
                <Typography level="body1" mb={1}>
                  <span style={{ fontWeight: "bold" }}>Email: </span>
                  anca_chelaru@gmail.com
                </Typography>
                <Typography level="body1" mb={1}>
                  <span style={{ fontWeight: "bold" }}>Telefon: </span>
                  07244854832
                </Typography>
              </Box>
            </Box>
          </Grid>
          {isFormVisible && (
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
                <Input
                  startDecorator={<PersonIcon />}
                  type="text"
                  sx={{ mb: 1 }}
                />
                <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
                  Email nou:
                </FormLabel>
                <Input
                  startDecorator={<EmailIcon />}
                  type="text"
                  sx={{ mb: 1 }}
                />
                <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
                  Parola noua:
                </FormLabel>
                <Input
                  startDecorator={<VpnKeyIcon />}
                  type="text"
                  sx={{ mb: 1 }}
                />

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
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default AccountPage;
