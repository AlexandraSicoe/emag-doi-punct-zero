import { Grid, Box, Typography, FormLabel, Button } from "@mui/joy";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
const DashboardPage = () => {
  return (
    <>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#F2F2F7"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: { xs: "100%", sm: "100%", md: "900px" },
            marginTop: { xs: "10px", md: "25px" },
            margin: { sx: "0px", sm: "0px", md: "25px" },
            padding: "25px",
          }}
        >
          <Typography level="body-lg">Adaugă un produs</Typography>
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid black",
              padding: "10px",
              alignSelf: "center",
            }}
          ></Box>

          <form style={{ paddingTop: "10px" }}>
            <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
              Denumire produs:
            </FormLabel>
            <Input
              placeholder="eg. John Doe"
              sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
              type="text"
            />
            <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
              Categorie:
            </FormLabel>

            <Select
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              placeholder="Selectează categoria"
            >
              <Option
                value="Îmbrăcăminte"
                sx={{
                  "&:hover": {
                    backgroundColor: "pink",
                  },
                }}
              >
                Îmbrăcăminte
              </Option>
              <Option
                sx={{
                  "&:hover": {
                    backgroundColor: "pink",
                  },
                }}
                value="Accesorii"
              >
                Accesorii
              </Option>
              <Option
                sx={{
                  "&:hover": {
                    backgroundColor: "pink",
                  },
                }}
                value="Hrană"
              >
                Hrană
              </Option>
              <Option
                sx={{
                  "&:hover": {
                    backgroundColor: "pink",
                  },
                }}
                value="Îngrijire"
              >
                Îngrijire
              </Option>
            </Select>
          </form>
        </Box>
      </Grid>
    </>
  );
};
export default DashboardPage;
