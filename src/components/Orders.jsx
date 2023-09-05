import { Box, Grid, Typography } from "@mui/joy";
import Input from "@mui/joy/Input";
import Order from "../components/Order";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import * as React from "react";

const Orders = () => {
  return (
    <>
      <Grid
        backgroundColor="#F2F2F7"
        sx={{
          flexDirection: { xs: "column" },
        }}
      >
        <Grid
          display="flex"
          flexDirection="column"
          backgroundColor="white"
          p={2}
          sx={{
            marginBottom: { xs: "25px", md: "25px" },
            borderRadius: "16px",
            marginTop: { xs: "0px", md: "25px" },
            width: {
              xs: "350px",
              sm: "345px",
              md: "1000px",
            },
          }}
        >
          <Box
            sx={{
              justifyContent: { xs: "center", md: "end" },
              marginTop: { xs: "10px", md: "25px" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography sx={{ marginBottom: "10px" }} level="h3">
              Comenzile mele
            </Typography>
          </Box>

          <Box display="flex">
            <Box
              sx={{
                justifyContent: { xs: "center", md: "end" },
                marginTop: { xs: "10px", md: "0px" },
              }}
            >
              <Box
                backgroundColor="white"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
                sx={{ flexDirection: { xs: "column", sm: "row", md: "row" } }}
              >
                <Typography level="body2" sx={{ marginRight: "10px" }}>
                  vezi
                </Typography>
                <Select
                  sx={{
                    width: "200px",
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
                    width: "200px",
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
                    width: "200px",
                    ml: { xs: "0px", md: "50px" },
                    mt: { xs: "15px", md: "0px" },
                  }}
                  placeholder="Cauta dupa produs"
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* <Grid
          sx={{
            padding: "15px",
            backgroundColor: "white",
            width: {
              xs: "350px",
              sm: "345px",
              md: "1000px",
            },
            borderRadius: "16px",
          }}
        >
          <Box
            Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              marginBottom: { xs: "10px", md: "10px" },
              marginTop: { xs: "10px", md: "25px" },
            }}
          >
            <Typography level="body-lg">Nr. comanda 316725420</Typography>
            <Typography level="body-sm">
              12 aug 2023, 12:11 • Total: 260,75 Lei
            </Typography>
          </Box>
          <Typography level="body-md">
            Produse vandute si livrate de GSM Arena | Subtotal: 24,99 Lei
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            pt={1}
          >
            <Typography level="body-md" sx={{ color: "#0096FF" }}>
              Acorda o nota vanzatorului
            </Typography>
            <Rating
              halfFillMode="svg"
              style={{ maxWidth: 100, marginLeft: "10px" }}
              value={rating}
              onChange={setRating}
            />
          </Box>
          <Typography level="body-md" sx={{ color: "#0096FF" }}>
            Produse ridicate
          </Typography>
        </Grid> */}
        <Grid
          display="flex"
          flexDirection="column"
          backgroundColor="white"
          p={2}
          sx={{
            marginBottom: { xs: "25px", md: "25px" },
            borderRadius: "16px",
            marginTop: { xs: "0px", md: "25px" },
            width: {
              xs: "350px",
              sm: "345px",
              md: "1000px",
            },
          }}
        >
          <Order />
        </Grid>
      </Grid>
    </>
  );
};
export default Orders;
