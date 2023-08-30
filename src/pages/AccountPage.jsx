import {
  Grid,
  Typography,
  Box,
  ListItemContent,
  ListItemButton,
  ListItemDecorator,
  List,
} from "@mui/joy";
import Navbar from "../components/Navbar";
import ListItem from "@mui/joy/ListItem";

const AccountPage = () => {
  return (
    <>
      <Navbar />

      <Grid height="100vh" backgroundColor="#F2F2F7" display="flex">
        <Grid
          m={3}
          display="flex"
          alignItems="start"
          sx={{
            flexDirection: "column",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            backgroundColor: "white",
            height: "50%",
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
              alignItems: "center",
            }}
            xs={12}
            md={6}
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
            <Typography level="h4">Anca Chelaru</Typography>
          </Grid>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemContent>Home</ListItemContent>
                <ListItemContent>Home</ListItemContent>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid
          m={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="white"
          height="50%"
        >
          <Grid xs={12} md={6} sx={{ padding: "25px" }}>
            <Typography
              sx={{
                marginTop: { xs: "10px", md: "40px" },
              }}
              level="h3"
            >
              Datele contului:
            </Typography>
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
                <Typography level="h5">
                  <span style={{ fontWeight: "bold" }}>Nume:</span> Anca Chelaru
                </Typography>
                <Typography level="h5">
                  <span style={{ fontWeight: "bold" }}>Email: </span>
                  anca_chelaru@gmail.com
                </Typography>
                <Typography level="h5">
                  <span style={{ fontWeight: "bold" }}>Telefon: </span>
                  07244854832
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>{" "}
      </Grid>
    </>
  );
};
export default AccountPage;
