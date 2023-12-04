import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import genericProductImage from "../images/genericProduct.png";
import { Box } from "@mui/joy";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const ProductCard = ({ product, setCartData, cartData }) => {
  const navigate = useNavigate();
  function getFirstNumber(str) {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }
  function replaceFirstNumber(str, newNumber) {
    return str.replace(/\d+/, newNumber);
  }
  return (
    <Box sx={{ padding: "5px", height: "100%" }}>
      <Card
        onClick={(e) => {
          navigate("/product?id=" + product._id);
        }}
        variant="solid"
        sx={{
          cursor: "pointer",
          borderRadius: "0px",
          backgroundColor: "white",
          height: "100%", // Set a fixed height for the card
          display: "flex",
          flexDirection: "column", // Ensure flex container for vertical alignment
        }}
      >
        <div style={{ flex: 1 }}>
          <Typography
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2, // Specify the number of lines to display
              textOverflow: "ellipsis",
              minHeight: "48px",
            }}
            level="title-md"
          >
            {product.name}
          </Typography>
          <Typography level="body-sm">{product.category.title}</Typography>
        </div>
        <AspectRatio minHeight="300px" maxHeight="300px">
          <img
            src={product.images[0] ? product.images[0] : genericProductImage}
            alt="product"
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Preț:</Typography>
            <Typography fontSize="md" fontWeight="lg">
              {product.price} RON
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            onClick={(e) => {
              // ... (unchanged)
            }}
            startDecorator={<ShoppingCartIcon />}
          >
            <Typography
              color="common.white"
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              Cumpără
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
export default ProductCard;
