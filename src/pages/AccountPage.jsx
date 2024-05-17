import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ReviewsIcon from "@mui/icons-material/Reviews";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Dashboard from "../components/Dashboard.jsx";

import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import CircularProgress from "@mui/joy/CircularProgress";
import ListItem from "@mui/joy/ListItem";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountEditForm from "../components/AccountEditForm";
import AddProductForm from "../components/AddProductForm";
import MyReviews from "../components/MyReviews";
import Orders from "../components/Orders";
import useQuery from "../helpers/useQuery";
import UserAvatar from "../images/UserAvatar.png";
const AccountPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [whatOptionVisible, setWhatOptionVisible] = useState("");
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [userData, setUserData] = useState();

  useEffect(() => {
    let lsUser = localStorage.getItem("user");
    console.log(lsUser);
    lsUser = JSON.stringify(lsUser); //transforma un js object (js object in string format) in json object in string format

    lsUser = JSON.parse(lsUser); //transforma un json object in js object
    if (!lsUser) {
      navigate("/administrare");
    }
    lsUser = JSON.parse(lsUser);
    setUserData(lsUser);
    let menu = query.get("m");
    setWhatOptionVisible(menu);
  }, []);
  return (
    <>
      {userData ? (
        <>
          <Grid
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              alignItems: { xs: "center", md: "start" },
              justifyContent: { xs: "start", md: "center" },
              padding: "25px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                backgroundColor: "white",
                width: { xs: "100%", sm: "100%", md: "400px" },
              }}
            >
              <Box
                sx={{
                  padding: "25px",
                  backgroundImage:
                    "linear-gradient(67deg, rgba(2,0,36,1) 0%, rgba(139,92,246,1) 0%, rgba(139,92,246,1) 23%, rgba(168,110,204,1) 46%, rgba(181,118,185,1) 55%, rgba(186,121,178,1) 66%, rgba(246,159,92,1) 98%)",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  src={userData.imageUrl ? userData.imageUrl : UserAvatar}
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
                    {userData.name}
                  </Typography>
                  <Typography level="title-md" sx={{ color: "white" }}>
                    Client E20 de 2 ani
                  </Typography>
                </Box>
              </Box>

              <List>
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      setWhatOptionVisible("dashboard");
                      navigate("/account?m=dashboard");
                    }}
                  >
                    <ListItemDecorator>
                      <DashboardIcon sx={{ color: "black" }} />
                    </ListItemDecorator>
                    <Typography level="h5" sx={{ color: "black" }}>
                      Dashboard
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      setWhatOptionVisible("addProduct");
                      navigate("/account?m=addProduct");
                    }}
                  >
                    <ListItemDecorator>
                      <HomeIcon sx={{ color: "black" }} />
                    </ListItemDecorator>
                    <Typography level="h5" sx={{ color: "black" }}>
                      Adaugă produs
                    </Typography>
                  </ListItemButton>
                </ListItem>

                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      setWhatOptionVisible("account");
                      navigate("/account?m=account");
                    }}
                    sx={{ color: "black" }}
                  >
                    <ListItemDecorator>
                      <PersonIcon sx={{ color: "black" }} />
                    </ListItemDecorator>
                    <Typography level="h5" sx={{ color: "black" }}>
                      Cont
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      setWhatOptionVisible("orders");
                      navigate("/account?m=orders");
                    }}
                  >
                    <ListItemDecorator>
                      <InventoryIcon sx={{ color: "black" }} />
                    </ListItemDecorator>
                    <Typography level="h5" sx={{ color: "black" }}>
                      Comenzile mele
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      setWhatOptionVisible("review");
                      navigate("/account?m=review");
                    }}
                    sx={{ color: "black" }}
                  >
                    <ListItemDecorator>
                      <ReviewsIcon sx={{ color: "black" }} />
                    </ListItemDecorator>
                    <Typography level="h5" sx={{ color: "black" }}>
                      Review-urile mele
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ color: "black" }}
                    variant="plain"
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("/administrare");
                    }}
                  >
                    <ListItemDecorator>
                      <LogoutIcon sx={{ color: "black" }} />
                    </ListItemDecorator>
                    <Typography level="h5" sx={{ color: "black" }}>
                      Log Out
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", sm: "100%", md: "50%" },
                backgroundColor: "red",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  flexDirection: "column",
                  padding: "25px",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  borderRadius: "16px",
                  marginLeft: { xs: "0px", md: "25px" },
                  marginTop: { xs: "25px", md: "0px" },
                }}
              >
                <Typography level="title-lg" sx={{ marginBottom: "10px" }}>
                  Datele contului:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "column", md: "row" },
                    alignItems: "center",
                  }}
                >
                  <img
                    src={userData.imageUrl ? userData.imageUrl : UserAvatar}
                    alt="profile"
                    style={{
                      borderRadius: "50%",
                      height: "75px",
                      width: "75px",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      justifyContent: { xs: "center", md: "end" },
                      marginTop: { xs: "10px", md: "0px" },
                      marginLeft: { xs: "10px", md: "40px" },
                    }}
                  >
                    <Typography level="body-md" mb={1}>
                      <span
                        style={{ fontWeight: "bold", fontFamily: "Poppins" }}
                      >
                        Nume:{" "}
                      </span>
                      <span style={{ fontFamily: "Poppins" }}>
                        <Typography level="body-sm">{userData.name}</Typography>
                      </span>
                    </Typography>
                    <Typography level="body-md" mb={1}>
                      <span
                        style={{ fontWeight: "bold", fontFamily: "Poppins" }}
                      >
                        Email:{" "}
                      </span>
                      <span style={{ fontFamily: "Poppins" }}>
                        <Typography level="body-sm">
                          {userData.email}
                        </Typography>
                      </span>
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography level="body-md" mb={1}>
                        <span
                          style={{ fontWeight: "bold", fontFamily: "Poppins" }}
                        >
                          Telefon:{" "}
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {whatOptionVisible === "account" && <AccountEditForm />}
              {whatOptionVisible === "addProduct" && <AddProductForm />}
              {whatOptionVisible === "orders" && (
                <Orders userId={userData._id} />
              )}
              {whatOptionVisible === "review" && <MyReviews />}
              {whatOptionVisible === "dashboard" && <Dashboard />}
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
