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
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const Orders = () => {
  const [rating, setRating] = useState(0);

  return (
    <>
      <Grid
        m={3}
        sx={{
          marginTop: { xs: "0px", md: "25px" },
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
        <Grid display="flex" flexDirection="column" p={2}>
          <Box
            sx={{
              justifyContent: { xs: "center", md: "end" },
              marginTop: { xs: "10px", md: "25px" },
            }}
          >
            <Typography level="h3">Comenzile mele</Typography>
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
                mb={3}
                pb={2}
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
                    width: "200px",
                    ml: "10px",
                  }}
                  placeholder="Cauta dupa produs"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            marginTop: { xs: "0px", md: "25px" },
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
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography level="body-lg">Nr. comanda 317531976</Typography>
              <Typography level="body-sm">
                20 aug 2023, 14:37 • Total: 143,99 Lei
              </Typography>
            </Box>
            <hr />
            <Typography level="body-md">
              Produse vandute si livrate de Boutique Concept Store | Subtotal:
              119,00 Lei
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
          </Box>
        </Grid>
        <Grid
          sx={{
            marginTop: { xs: "0px", md: "25px" },
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
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography level="body-lg">Nr. comanda 316725420</Typography>
              <Typography level="body-sm">
                12 aug 2023, 12:11 • Total: 260,75 Lei
              </Typography>
            </Box>
            <hr />
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
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Orders;
