import { Box, Grid, Typography } from "@mui/joy";
import Textarea from "@mui/joy/Textarea";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const ReviewSample = () => {
  const [readOnlyRating, setReadOnlyRating] = useState(5);

  return (
    <Grid container>
      <Grid
        display="flex"
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            justifyContent: { xs: "center", md: "end" },
            marginTop: { xs: "0px", md: "40px" },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="profile picture"
            style={{
              borderRadius: "50%",
              height: "50px",
              width: "50px",
              objectFit: "cover",
            }}
          />
          <Box>
            <Typography level="body-md">Anca Chelaru</Typography>
            <Typography level="body-sm">17 Aug 2023</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "end" },
            marginLeft: { xs: "10px", md: "25px" },
            marginTop: { xs: "0px", md: "40px" },
          }}
        >
          <Typography level="body-md">Excelent</Typography>
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
              padding: "0px",
              backgroundColor: "transparent",
              marginTop: "5px",
            }}
            disabled
            variant="plain"
            minRows={2}
            value="Sunt multumita."
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default ReviewSample;
