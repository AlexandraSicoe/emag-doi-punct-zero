import { Box, Typography, Button } from "@mui/joy";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
const Review = () => {
  const [rating, setRating] = useState(0);

  return (
    <Box display="flex" mt={3}>
      <img
        src="https://s13emagst.akamaized.net/products/40573/40572229/images/res_17765671aeeef7caffa2052a656e9a46.jpg?width=150&height=150&hash=1A4A6B6C7704573DA74520417A7C149D"
        style={{ height: "100px", width: "100px" }}
      />
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="start"
        flexDirection="column"
      >
        <Typography sx={{ mb: "10px" }}>
          Ruj Catrice Vegan Collagen Matt 060, 3.8 g
        </Typography>
        <Rating
          halfFillMode="svg"
          style={{ maxWidth: 100 }}
          value={rating}
          onChange={setRating}
        />
        <Button
          size="sm"
          sx={{
            backgroundImage:
              "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100%);",
            mt: "10px",
          }}
        >
          Scrie un review
        </Button>
      </Box>
    </Box>
  );
};
export default Review;
