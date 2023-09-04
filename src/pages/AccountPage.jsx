import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ReviewsIcon from "@mui/icons-material/Reviews";
import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import ListItem from "@mui/joy/ListItem";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountEditForm from "../components/AccountEditForm";
import Navbar from "../components/Navbar";
import Orders from "../components/Orders";

const AccountPage = () => {
  const navigate = useNavigate();
  const [whatOptionVisible, setWhatOptionVisible] = useState("");
  const [selectedValue, setSelectedValue] = React.useState("a");

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
              <ListItemButton
                onClick={() => setWhatOptionVisible("account")}
                sx={
                  whatOptionVisible == "account"
                    ? {
                        backgroundImage:
                          "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100%);",
                        color: "white",
                      }
                    : { backgroundColor: "transparent", color: "black" }
                }
              >
                {" "}
                <ListItemDecorator>
                  <PersonIcon />
                </ListItemDecorator>
                Account
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                variant="plain"
                onClick={() => setWhatOptionVisible("orders")}
                sx={
                  whatOptionVisible == "orders"
                    ? {
                        backgroundImage:
                          "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100%);",
                        color: "white",
                      }
                    : { backgroundColor: "transparent", color: "black" }
                }
              >
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
          alignItems="start"
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
                md: "1000px",
              },
              borderRadius: "16px",
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
                  marginBottom: { xs: "10px", md: "40px" },
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
          {whatOptionVisible == "account" && <AccountEditForm />}
          {whatOptionVisible == "orders" && <Orders />}
        </Grid>
      </Grid>
    </>
  );
};
export default AccountPage;
