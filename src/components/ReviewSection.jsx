import { Box, Grid, Typography } from "@mui/joy";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const ReviewSection = () => {
  const [readOnlyRating, setReadOnlyRating] = useState(3.5);
  const [rating, setRating] = useState(0);

  return (
    <>
      <Grid xs={12} md={6} mt={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "start", md: "start" },
          }}
        >
          <Typography level="h3">Recenziile clienților</Typography>
          <Rating
            halfFillMode="svg"
            style={{ maxWidth: 150 }}
            readOnly
            value={readOnlyRating}
          />
          <Typography level="h3">Recenziile produsului</Typography>

          <Rating
            halfFillMode="svg"
            style={{ maxWidth: 150 }}
            value={rating}
            onChange={setRating}
          />
        </Box>
      </Grid>
    </>
  );
};
export default ReviewSection;
