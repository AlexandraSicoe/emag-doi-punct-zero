const addToCartAndGetCart = (cartValue, _product) => {
  function getFirstNumber(str) {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }
  function replaceFirstNumber(str, newNumber) {
    return str.replace(/\d+/, newNumber);
  }
  let _cartValue;

  if (cartValue.some((item) => item._id === _product._id)) {
    cartValue.forEach((obj) => {
      if (obj._id === _product._id) {
        _product = JSON.parse(JSON.stringify(obj));
        if (/^[0-9]/.test(_product.name.charAt(0))) {
          let numberOfProducts = getFirstNumber(_product.name);
          numberOfProducts++;

          _product.price = numberOfProducts * _product.price;
          _product.name = replaceFirstNumber(_product.name, numberOfProducts);
        } else {
          _product.name = "2x " + _product.name;
          _product.price = _product.price * 2;
        }
      }
    });
    _cartValue = JSON.parse(JSON.stringify(cartValue));
    _cartValue = _cartValue.map((item) => {
      return item._id === _product._id ? _product : item;
    });
    localStorage.setItem("cart", JSON.stringify(_cartValue));
  } else {
    _cartValue = [...cartValue, _product];
    localStorage.setItem("cart", JSON.stringify(_cartValue));
  }
  return _cartValue;
};

export default addToCartAndGetCart;
