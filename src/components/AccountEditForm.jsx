import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Box, Button, FormLabel, Typography } from "@mui/joy";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "@mui/joy/Input";
import Option from "@mui/joy/Option";
import Radio from "@mui/joy/Radio";
import Select from "@mui/joy/Select";
import * as React from "react";
import { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";
import axios from "axios";
import CircularProgress from "@mui/joy/CircularProgress";

const AccountEditForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [phone, setPhone] = React.useState("");
  const [storedUserData, setStoredUserData] = useState(null);
  const handleChange = (e) => {
    const { value } = e.target;

    setStoredUserData((prevUserData) => ({
      ...prevUserData,
      prefix: Number(value),
    }));
  };

  const generateRandomFileName = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 10; // You can adjust the length of the filename as needed
    let randomFileName = "";

    for (let i = 0; i < length; i++) {
      randomFileName += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return randomFileName;
  };

  const base64ToFile = (base64String, filename) => {
    // Parse the Base64 string to get the image type
    const typeMatch = base64String.match(/^data:(.*?);/);
    const type = typeMatch && typeMatch[1];

    // Remove the data:image/... prefix to get the base64 data
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");

    // Convert the base64 data to a Uint8Array
    const byteArray = atob(base64Data)
      .split("")
      .map((char) => char.charCodeAt(0));
    const uint8Array = new Uint8Array(byteArray);

    // Create a Blob object from the Uint8Array and image type
    const blob = new Blob([uint8Array], { type });

    // Create a File object from the Blob
    return new File([blob], filename, { type });
  };
  const updateUser = async (userID, updatedUserData) => {
    try {
      const response = await axios.put(
        "https://e20.ro/api/user/" + userID,
        updatedUserData,
        {
          headers: {
            "Content-Type": "application/json", // Specify content type as JSON
          },
        }
      );

      console.log("User updated successfully:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.reload();
    } catch (error) {
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Error message:", error.response.data);
      } else if (error.request) {
        console.error("No response received from server:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  const handleSaveProfilePicture = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const formData = new FormData();
    const userID = userData._id;
    formData.append("file", base64ToFile(imageFile, generateRandomFileName()));

    try {
      const response = await axios.post(
        "https://e20.ro/api/user/" + userID + "/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      userData.imageUrl = response.data.imageUrl;
      localStorage.setItem("user", JSON.stringify(userData));
      window.location.reload();
    } catch (error) {}
  };

  function getMaxDate() {
    const currentDate = new Date();
    const maxDate = new Date(currentDate);
    maxDate.setFullYear(currentDate.getFullYear() - 18);
    return maxDate.toISOString().slice(0, 10);
  }
  const maxDate18YearsAgo = getMaxDate();
  useEffect(() => {
    let lsUser = localStorage.getItem("user");
    lsUser = JSON.parse(lsUser);
    lsUser.password = "";
    setStoredUserData(lsUser);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        width: "100%",
        marginTop: "25px",
      }}
    >
      {storedUserData == null ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            alignItems: "start",
            justifyContent: { xs: "center", md: "start" },
            marginLeft: { xs: "0px", md: "25px" },
            padding: "25px",
            width: "100%",
            borderRadius: "16px",
          }}
        >
          <Typography level="h3" mb={2}>
            Administrare date
          </Typography>
          <Box
            sx={{ overflowX: "hidden", maxWidth: "250px", overflowY: "hidden" }}
          >
            <Avatar
              width={250}
              height={250}
              label="Schimbă imaginea"
              onCrop={(preview) => {
                setImageFile(preview);
              }}
            />
          </Box>

          <Button
            sx={{
              width: "250px",
              marginBottom: "25px",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }}
            onClick={() => {
              handleSaveProfilePicture();
            }}
            disabled={imageFile === null}
          >
            Salvează imaginea
          </Button>
          <form style={{ width: "100%" }}>
            <Box display="flex" justifyContent="start" mb={2}>
              <Radio
                checked={storedUserData.prefix === 0}
                onChange={handleChange}
                value="0"
                label="Dl."
                name="radio-buttons"
                slotProps={{ input: { "aria-label": "A" } }}
                sx={{ marginRight: "50px" }}
              />
              <Radio
                checked={storedUserData.prefix === 1}
                onChange={handleChange}
                value="1"
                label="Dna."
                name="radio-buttons"
                slotProps={{ input: { "aria-label": "B" } }}
              />
            </Box>

            <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
              Nume si prenume:
            </FormLabel>
            <Input
              startDecorator={<PersonIcon sx={{ color: "#8b5cf6" }} />}
              type="text"
              sx={{ mb: 1, width: "50%" }}
              value={storedUserData.name}
              onChange={(e) => {
                const { value } = e.target; // Get the value from the input field
                // Update storedUserData with the new name value
                setStoredUserData((prevUserData) => ({
                  ...prevUserData,
                  name: value,
                }));
              }}
            />
            <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
              Email nou:
            </FormLabel>
            <Input
              startDecorator={<EmailIcon sx={{ color: "#8b5cf6" }} />}
              type="email"
              sx={{ mb: 1, width: "50%" }}
              value={storedUserData.email}
              onChange={(e) => {
                const { value } = e.target; // Get the value from the input field
                // Update storedUserData with the new name value
                setStoredUserData((prevUserData) => ({
                  ...prevUserData,
                  email: value,
                }));
              }}
            />
            <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
              Parola noua:
            </FormLabel>
            <Input
              placeholder={"••••••"}
              startDecorator={<VpnKeyIcon sx={{ color: "#8b5cf6" }} />}
              type="password"
              sx={{ mb: 1, width: "50%" }}
              value={storedUserData.password}
              onChange={(e) => {
                const { value } = e.target; // Get the value from the input field
                // Update storedUserData with the new name value
                setStoredUserData((prevUserData) => ({
                  ...prevUserData,
                  password: value,
                }));
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
                Telefon:{" "}
              </FormLabel>

              <PhoneInput
                defaultCountry="ro"
                value={storedUserData.phone}
                onChange={(value) => {
                  setStoredUserData((prevUserData) => ({
                    ...prevUserData,
                    phone: value,
                  }));
                }}
                style={{ marginBottom: "5px", width: "50%" }}
              />
            </Box>
            <Box
              backgroundColor="white"
              display="flex"
              justifyContent="start"
              flexDirection="column"
              mb={2}
            >
              <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
                Data de naștere:
              </FormLabel>
              {console.log(storedUserData)}
              <Input
                type="date"
                slotProps={{
                  input: {
                    min: "2018-06-07T00:00",
                    max: maxDate18YearsAgo,
                  },
                }}
                sx={{ mb: 1, width: "50%" }}
                value={storedUserData?.birthday?.slice(0, 10)}
                onChange={(e) => {
                  const { value } = e.target; // Get the value from the input field
                  // Update storedUserData with the new name value
                  setStoredUserData((prevUserData) => ({
                    ...prevUserData,
                    birthday: value,
                  }));
                }}
              />
            </Box>

            <Button
              size="lg"
              sx={{ textAlign: "center", width: "250px" }}
              onClick={() => {
                updateUser(storedUserData._id, storedUserData);
              }}
            >
              Salveaza informatiile
            </Button>
          </form>
        </Box>
      )}
    </Box>
  );
};
export default AccountEditForm;
