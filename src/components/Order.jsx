import { Box, Typography, Grid } from "@mui/joy";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import Orders from "./Orders";

const Order = ({ order }) => {
  const [rating, setRating] = useState(0);
  function formatDate(inputDate) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString("ro-RO", options);

    return `${formattedDate}`;
  }
  console.log(order);

  return (
    <>
      {order?.products?.map((product, index) => {
        return (
          <Box
            key={index}
            display="inline-block"
            style={{ marginRight: "10px" }}
          >
            {product.images[0] && (
              <img
                style={{ width: "80px", height: "80px" }}
                src={product.images[0]}
                alt={`Product ${index}`}
              />
            )}
          </Box>
        );
      })}
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
        <Typography level="body-lg">
          Nr. comanda: {order._id.slice(0, -12)}
        </Typography>
        <Typography level="body-sm">
          {formatDate(order.createdAt)} • Total: {order.totalPrice.toFixed(2)}{" "}
          Lei
        </Typography>
      </Box>
      <Typography level="body-md">
        Produse vândute și livrate de Boutique Concept Store
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        pt={1}
      >
        <Typography level="body-md" sx={{ color: "#0096FF" }}>
          Acorda o nota vânzătorului
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
