import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import genericProductImage from "../images/genericProduct.png";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate("/product?id=" + product._id);
      }}
      variant="outlined"
      sx={{ width: 320, cursor: "pointer" }}
    >
      <div>
        <Typography level="title-lg">{product.name}</Typography>
        <Typography level="body-sm">{product.category}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={
            product.images[0].includes("image1_url")
              ? genericProductImage
              : product.images[0]
          }
          alt="product image"
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${product.price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Buy
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
