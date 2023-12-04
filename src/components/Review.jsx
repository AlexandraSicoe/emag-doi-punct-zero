import { Box, Typography, Button } from "@mui/joy";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
const Review = () => {
  const [rating, setRating] = useState(0);

  return (
    <Box display="flex" mt={3}>
      <img
        src="https://shop-cdn-m.mediazs.com/bilder/royal/canin/mini/adult/hran/uscat/pentru/cini/aduli/de/ras/mic/9/400/rc_shn_adultmini_mv_eretailkit_ro_ro_9.jpg"
        style={{ height: "100px", width: "100px", marginRight: "13px" }}
      />
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="start"
        flexDirection="column"
      >
        <Typography sx={{ mb: "10px" }}>
          Royal Canin Mini Adult Hrană uscată pentru câini adulți de rasă mică{" "}
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
            color: "primary",
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
