import { Grid, Box, Typography, FormLabel, Button } from "@mui/joy";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Textarea from "@mui/joy/Textarea";

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
            <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
              Preț:
            </FormLabel>
            <Input
              sx={{ border: "solid 1px	#1F51FF", marginBottom: "5px" }}
              type="text"
            />
            <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
              Descriere produs:
            </FormLabel>
            <Textarea
              sx={{ marginBottom: "25px" }}
              required
              minRows={3}
            ></Textarea>
            <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
              Adaugă o imagine:
            </FormLabel>
            <Input
              size="80"
              sx={{ marginBottom: "5px", border: "none" }}
              type="file"
              accept="image/png, image/jpeg"
            />
            <Button type="submit">Adaugă produs</Button>
          </form>
        </Box>
      </Grid>
    </>
  );
};
export default DashboardPage;
