import { Box, Typography } from "@mui/joy";
import Grid from "@mui/joy/Grid";
const ContactInfo = () => {
  return (
    <>
      <Grid m={4} container spacing={2} columns={16}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "flex-start",
            width: "250px",
          }}
        >
          <Box>
            <Typography
              level="title-md"
              sx={{ fontWeight: "bold", width: "300px" }}
            >
              Adresa Noastră
            </Typography>
          </Box>
          <Typography level="body-md">
            Strada Imaginatiei, nr. 10-28, Creative Office Park, Emerald Tower,
          </Typography>

          <Typography level="body-md">Bucuresti, Romania</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "flex-start",
            width: "250px",
          }}
        >
          <Box>
            <Typography
              level="title-md"
              sx={{ fontWeight: "bold", width: "300px!important" }}
            >
              Program de Lucru
            </Typography>
          </Box>

          <Typography
            level="body-md"
            // sx={{
            //   paddingBottom: "10px",
            //   paddingTop: "10px",
            //   // width: { xs: "300px", md: "700px" },
            // }}
          >
            Luni- vineri, 9:00-18:00.
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
export default ContactInfo;
