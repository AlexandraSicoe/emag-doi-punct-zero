import {
  Grid,
  Typography,
  Box,
  ListItemButton,
  ListItemDecorator,
  List,
  Button,
} from "@mui/joy";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";

import Navbar from "../components/Navbar";
import ListItem from "@mui/joy/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import ReviewsIcon from "@mui/icons-material/Reviews";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const OrdersPage = () => {
  const navigate = useNavigate();

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
              <ListItemButton>
                {" "}
                <ListItemDecorator>
                  <PersonIcon />
                </ListItemDecorator>
                Account
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
              <ListItemButton>
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
          sx={{
            marginTop: { xs: "0px" },
            padding: "20px",
            backgroundColor: "white",
            width: {
              xs: "350px",
              sm: "345px",
              md: "1000px",
            },
            borderRadius: "16px",
            height: { md: "200px" },
          }}
        >
          <Box
            sx={{
              justifyContent: { xs: "center", md: "end" },
              marginTop: { xs: "10px", md: "45px" },
              marginLeft: { xs: "10px", md: "40px" },
            }}
          >
            <Typography sx={{ paddingBottom: "20px" }} level="h3">
              Comenzile mele
            </Typography>
          </Box>

          <hr />
          <Box display="flex" justifyContent="row">
            <Box
              sx={{
                justifyContent: { xs: "center", md: "end" },
                marginTop: { xs: "10px", md: "20px" },
              }}
            >
              <Box
                backgroundColor="white"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography level="body2" sx={{ marginRight: "10px" }}>
                  vezi
                </Typography>
                <Select
                  sx={{
                    width: {
                      xs: "200px",
                      sm: "200px",
                      md: "300px",
                    },
                  }}
                  placeholder="toate comenzile"
                >
                  <Option>toate comenzile</Option>
                  <Option>comenzile active</Option>
                  <Option>comenzile anulate</Option>
                </Select>
                <Typography
                  level="body2"
                  sx={{ marginLeft: "10px", marginRight: "10px" }}
                >
                  din
                </Typography>
                <Select
                  sx={{
                    width: {
                      xs: "200px",
                      sm: "200px",
                      md: "300px",
                    },
                  }}
                  placeholder="din ultimele 3 luni"
                >
                  <Option>din ultimele 3 luni</Option>
                  <Option>din ultimele 6 luni</Option>
                  <Option>2021</Option>
                  <Option>2022</Option>
                  <Option>2023</Option>
                  <Option>Toate</Option>
                </Select>
                <Input
                  sx={{
                    width: "100%",
                    ml: "10px",
                  }}
                  placeholder="Cauta dupa produs"
                  endDecorator={
                    <Button
                      variant="outlined"
                      sx={{
                        width: "32px",
                        height: "32px",
                        p: 0,
                        borderRadius: "50%",
                      }}
                    >
                      <SearchIcon
                        sx={{
                          color: "black",
                          width: "20px",
                          height: "20px",
                          p: 0,
                        }}
                      />
                    </Button>
                  }
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default OrdersPage;
