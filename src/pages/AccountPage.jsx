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
import { Link, useNavigate } from "react-router-dom";
import AccountEditForm from "../components/AccountEditForm";
import Navbar from "../components/Navbar";
import MenuDropdown from "../components/MenuDropdown";
import Orders from "../components/Orders";
import MyReviews from "../components/MyReviews";
import useQuery from "../helpers/useQuery";
import Footer from "../components/Footer";
import AddProductForm from "../components/AddProductForm";

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
                  <Typography level="title-md" sx={{ color: "white" }}>
                    Client E20 de 2 ani
                  </Typography>
                </Box>
              </Box>

              <List>
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
                    Add Product
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
                    Cont
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
                    Comenzile mele
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
                    Review-urile mele
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ color: "black" }}
                    variant="plain"
                    onClick={() => {
                      localStorage.setItem("user", "[]");
                      navigate("/administrare");
                    }}
                  >
                    <ListItemDecorator>
                      <LogoutIcon sx={{ color: "black" }} />
                    </ListItemDecorator>
                    Log Out
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: { xs: "100%", sm: "100%", md: "50%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "25px",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  borderRadius: "16px",
                  marginLeft: { xs: "0px", md: "25px" },
                  marginTop: { xs: "25px", md: "0px" },
                  alignItems: { xs: "center", md: "start" },
                }}
              >
                <Typography sx={{ marginBottom: "10px" }} level="h3">
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
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                    <Typography level="body-md" mb={1}>
                      <span
                        style={{ fontWeight: "bold", fontFamily: "Poppins" }}
                      >
                        Telefon:{" "}
                      </span>
                      <Typography level="body-sm">
                        <span style={{ fontFamily: "Poppins" }}>
                          07244854832
                        </span>
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {whatOptionVisible === "account" && <AccountEditForm />}
              {whatOptionVisible === "addProduct" && <AddProductForm />}
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
