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
import addToCartAndGetCart from "../helpers/productActions";

const ProductCard = ({ product, setCartValue, cartValue }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: "5px",
        height: "100%",
      }}
    >
      <Card
        onClick={(e) => {
          navigate("/product?id=" + product._id);
        }}
        variant="solid"
        sx={{
          cursor: "pointer",
          borderRadius: "0px",
          backgroundColor: "white",
          height: "100%",
          display: "flex",
          flexDirection: "column",
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
              minHeight: "58px",
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
        <CardContent
          orientation="horizontal"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography level="body-xs">Preț:</Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: "0px",
              }}
            >
              {product.price.toFixed(2)} RON
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "inline-block" },
            }}
          >
            <Button
              variant="solid"
              size="sm"
              color="primary"
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              onClick={(e) => {
                e.stopPropagation(); //cand apas pe un buton de ex, sa nu apese pe chestiile din spate
                let _product = JSON.parse(JSON.stringify(product));

                const _cartValue = addToCartAndGetCart(cartValue, _product);
                setCartValue(_cartValue);
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
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              ml: "auto",
            }}
          >
            <Button
              variant="solid"
              size="md"
              color="primary"
              sx={{ fontWeight: 600 }}
              onClick={(e) => {
                e.stopPropagation();
                let _product = JSON.parse(JSON.stringify(product));

                const _cartValue = addToCartAndGetCart(cartValue, _product);
                setCartValue(_cartValue);
              }}
            >
              <ShoppingCartIcon />
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default ProductCard;
