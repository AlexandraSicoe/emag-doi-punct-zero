import { Grid, Box, Typography, FormLabel, Button, Input } from "@mui/joy";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Textarea from "@mui/joy/Textarea";
import { useState, useRef } from "react";

const DashboardPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any logic with the selected file, for example, send it to the server.
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      // You can send the file to the server or perform other actions here.
    }
  };

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
              padding: "5px",
              alignSelf: "center",
            }}
          ></Box>

          <form style={{ paddingTop: "10px" }} onSubmit={handleSubmit}>
            <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
              Denumire produs:
            </FormLabel>
            <Input
              sx={{
                border: "solid 1px	#1F51FF",
                marginBottom: "5px",
              }}
              type="text"
              required
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
              mb={2}
            >
              <Box
                sx={{
                  border: "1px solid black",
                  borderRadius: "5%",
                  padding: "20px",
                }}
              >
                <Typography sx={{ marginBottom: "5px" }}>
                  Adaugă o imagine:
                </Typography>

                <input
                  ref={fileInputRef}
                  sx={{
                    marginBottom: "5px",
                    display: "none",
                  }}
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                />
                <Button size="sm" onClick={() => fileInputRef.current.click()}>
                  Încarcă imaginea
                </Button>
              </Box>
            </Box>
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
              <Option value="Îmbrăcăminte">Îmbrăcăminte</Option>
              <Option value="Accesorii">Accesorii</Option>
              <Option value="Hrană">Hrană</Option>
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
              required
            />
            <FormLabel sx={{ fontSize: "18px", marginBottom: "5px" }}>
              Descriere produs:
            </FormLabel>
            <Textarea
              sx={{ marginBottom: "25px" }}
              required
              minRows={3}
            ></Textarea>

            <Button type="submit">Adaugă produs</Button>
          </form>
        </Box>
      </Grid>
    </>
  );
};
export default DashboardPage;
