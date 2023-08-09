import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

const ProductCard = ({ product }) => {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{product.title}</Typography>
        <Typography level="body-sm">{product.category}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={product.image} alt="product image" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {product.price}
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
