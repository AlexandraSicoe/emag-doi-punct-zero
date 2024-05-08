import { Grid, Box, Typography, FormLabel, Button, Input } from "@mui/joy";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Textarea from "@mui/joy/Textarea";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import SelectCategory from "./SelectCategory";
import { async } from "q";

const AddProductForm = () => {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(
    "https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg"
  );
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      const imagePreviewUrl = URL.createObjectURL(file);
      setPreviewImage(imagePreviewUrl);
    } else {
      // If no file is selected, set a default image URL
      setPreviewImage(
        "https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg"
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem("user"));
    const user = userData._id;
    const formData = new FormData();
    console.log(selectedFile);
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("user", user);
    formData.append("category", selectedCategory);

    // try {
    //   const response = await axios.post(
    //     "https://e20.ro/api/products",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log("Product uploaded successfully", response.data);
    // } catch (error) {
    //   console.error("Error uploading product", error);
    // }
  };

  const getCategories = async () => {
    try {
      const result = await axios.get("https://e20.ro/api/categories/leaf");
      setCategories(result.data);
      setSelectedCategory(result.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "center",
          width: "100%",
          marginTop: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "16px",
            width: "100%",
            marginLeft: { xs: "0px", md: "25px" },
            padding: "25px",
            boxSizing: "border-box",
          }}
        >
          <Typography level="h3" mb={2}>
            Adaugă un produs
          </Typography>

          <form
            style={{ paddingTop: "10px", width: "100%" }}
            onSubmit={handleSubmit}
          >
            <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
              Denumire produs:
            </FormLabel>
            <Input
              sx={{
                border: "solid 1px	#1F51FF",
                marginBottom: "5px",
              }}
              type="text"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "start",
                justifyContent: "start",
                padding: "20px 20px 20px 0px",
              }}
            >
              <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
                Adaugă o imagine
              </FormLabel>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <input
                ref={fileInputRef}
                style={{ marginBottom: "5px", display: "none" }}
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
              />
              <Button
                size="sm"
                onClick={() => {
                  fileInputRef.current.click();
                }}
              >
                Încarcă imaginea
              </Button>
            </Box>
            <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
              Categorie:
            </FormLabel>
            {categories && (
              <SelectCategory
                data={categories}
                setSelectedCategory={setSelectedCategory}
              />
            )}
            <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
              Preț:
            </FormLabel>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Input
                sx={{
                  border: "solid 1px	#1F51FF",
                  marginBottom: "5px",
                  width: "15%",
                }}
                type="number"
                required
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
              <Typography
                level="body-lg"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "5px",
                  marginTop: "-3px",
                }}
              >
                RON
              </Typography>
            </Box>

            <FormLabel sx={{ fontSize: "15px", marginBottom: "5px" }}>
              Descriere produs:
            </FormLabel>
            <Textarea
              sx={{ marginBottom: "25px" }}
              required
              minRows={3}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></Textarea>

            <Button type="submit">Adaugă produs</Button>
          </form>
          <Box sx={{ height: "500px" }}></Box>
        </Box>
      </Box>
    </>
  );
};
export default AddProductForm;
