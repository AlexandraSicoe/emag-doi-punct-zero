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
              {product.price.toFixed(2)} RON
            </Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            onClick={(e) => {
              e.stopPropagation();
              let _product = JSON.parse(JSON.stringify(product));
              if (cartData.some((item) => item._id === _product._id)) {
                cartData.forEach((obj) => {
                  if (obj._id === _product._id) {
                    _product = JSON.parse(JSON.stringify(obj));
                    if (/^[0-9]/.test(_product.name.charAt(0))) {
                      let numberOfProducts = getFirstNumber(_product.name);
                      numberOfProducts++;

                      _product.price = numberOfProducts * product.price;
                      _product.name = replaceFirstNumber(
                        _product.name,
                        numberOfProducts
                      );
                    } else {
                      _product.name = "2x " + _product.name;
                      _product.price = _product.price * 2;
                    }
                  }
                });
                let _cartData = JSON.parse(JSON.stringify(cartData));
                _cartData = _cartData.map((item) => {
                  return item._id === _product._id ? _product : item;
                });
                localStorage.setItem("cart", JSON.stringify(_cartData));

                setCartData(_cartData);
                window.dispatchEvent(new Event("customStorageChange"));
              } else {
                const _cartData = [...cartData, product];
                localStorage.setItem("cart", JSON.stringify(_cartData));
                setCartData(_cartData);
                window.dispatchEvent(new Event("customStorageChange"));
              }
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
