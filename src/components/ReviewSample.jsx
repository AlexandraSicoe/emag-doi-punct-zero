import { Box, Grid, Typography } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const ReviewSample = () => {
  const [readOnlyRating, setReadOnlyRating] = useState(5);

  return (
    <Grid>
      <Box></Box>
      <Box>
        <Typography level="h5">Excelent</Typography>
        <Rating
          halfFillMode="svg"
          style={{ maxWidth: 100 }}
          readOnly
          value={readOnlyRating}
        />
        <Textarea
          sx={{
            "--joy-palette-neutral-plainColor": "black",
            "--joy-palette-neutral-400": "black",
          }}
          disabled
          variant="plain"
          minRows={2}
          value="Sunt multumita
"
        />
      </Box>
    </Grid>
  );
};
export default ReviewSample;
