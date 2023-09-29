import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ReviewsIcon from "@mui/icons-material/Reviews";
import CircularProgress from "@mui/joy/CircularProgress";
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
import MyReviews from "../components/MyReviews";
import useQuery from "../helpers/useQuery";

const AccountPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [whatOptionVisible, setWhatOptionVisible] = useState("");
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [userData, setUserData] = useState();

  useEffect(() => {
    let lsUser = localStorage.getItem("user");
    lsUser = JSON.parse(lsUser);
    setUserData(lsUser);
    let menu = query.get("m");
    setWhatOptionVisible(menu);
  }, []);
  return (
    <>
      {userData ? (
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
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                borderRadius: "16px",
                backgroundColor: "white",
                width: { xs: "350px", sm: "345px", md: "400px" },
                marginTop: { xs: "0px", md: "25px" },
              }}
            >
              <Box
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
                  alt="profile"
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
                    {userData.name}
                  </Typography>
                  <Typography level="h6">Client eMAG de 2 ani</Typography>
                </Box>
              </Box>

              <List>
                <ListItem>
                  <ListItemButton
                    sx={
                      whatOptionVisible === ""
                        ? {
                            backgroundImage:
                              "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100%);",
                            color: "white",
                          }
                        : { backgroundColor: "transparent", color: "black" }
                    }
                    onClick={() => {
                      setWhatOptionVisible("");
                      navigate("/account?m=home");
                    }}
                  >
                    <ListItemDecorator>
                      <HomeIcon />
                    </ListItemDecorator>
                    Home
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      setWhatOptionVisible("account");
                      navigate("/account?m=account");
                    }}
                    sx={
                      whatOptionVisible === "account"
                        ? {
                            backgroundImage:
                              "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100%);",
                            color: "white",
                          }
                        : { backgroundColor: "transparent", color: "black" }
                    }
                  >
                    <ListItemDecorator>
                      <PersonIcon />
                    </ListItemDecorator>
                    Account
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      setWhatOptionVisible("orders");
                      navigate("/account?m=orders");
                    }}
                    sx={
                      whatOptionVisible === "orders"
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
                  <ListItemButton
                    onClick={() => {
                      setWhatOptionVisible("review");
                      navigate("/account?m=review");
                    }}
                    sx={
                      whatOptionVisible === "review"
                        ? {
                            backgroundImage:
                              "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100%);",
                            color: "white",
                          }
                        : { backgroundColor: "transparent", color: "black" }
                    }
                  >
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
            </Box>
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
              <Box
                sx={{
                  padding: "25px",
                  backgroundColor: "white",
                  width: {
                    xs: "350px",
                    sm: "345px",
                    md: "1000px",
                  },
                  marginBottom: { xs: "25px", md: "0px" },
                  borderRadius: "16px",
                }}
              >
                <Typography sx={{ marginBottom: "10px" }} level="h3">
                  Datele contului:
                </Typography>
                <Box display="flex" justifyContent="row">
                  <Box
                    sx={{
                      justifyContent: { xs: "center", md: "end" },
                      marginTop: { xs: "10px", md: "0px" },
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="profile"
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
                      marginTop: { xs: "10px", md: "0px" },
                      marginLeft: { xs: "10px", md: "40px" },
                    }}
                  >
                    <Typography level="body1" mb={1}>
                      <span style={{ fontWeight: "bold" }}>Nume: </span>
                      {userData.name}
                    </Typography>
                    <Typography level="body1" mb={1}>
                      <span style={{ fontWeight: "bold" }}>Email: </span>
                      {userData.email}
                    </Typography>
                    <Typography level="body1" mb={1}>
                      <span style={{ fontWeight: "bold" }}>Telefon: </span>
                      07244854832
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {whatOptionVisible === "account" && <AccountEditForm />}
              {whatOptionVisible === "orders" && (
                <Orders userId={userData._id} />
              )}
              {whatOptionVisible === "review" && <MyReviews />}
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              top: "calc(50% - 40px)",
              left: "calc(50% - 40px)",
            }}
          >
            <CircularProgress />
          </Box>
        </>
      )}
    </>
  );
};
export default AccountPage;
