import { Box, Typography, Grid } from "@mui/joy";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const Order = () => {
  const [rating, setRating] = useState(0);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          marginBottom: { xs: "10px", md: "10px" },
          marginTop: { xs: "10px", md: "0px" },
        }}
      >
        <Typography level="body-lg">Nr. comanda 317531976</Typography>
        <Typography level="body-sm">
          20 aug 2023, 14:37 • Total: 143,99 Lei
        </Typography>
      </Box>
      <Typography level="body-md">
        Produse vandute si livrate de Boutique Concept Store
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
      <Typography
        level="body-md"
        sx={{
          color: "#0096FF",
          paddingBottom: { xs: "10px", md: "20px" },
        }}
      >
        Produse ridicate
      </Typography>
      <hr />
    </>
  );
};
export default Order;
