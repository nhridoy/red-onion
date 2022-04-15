const addFoodToCart = (food, amount) => {
  const cart = getCart();
  const foodInCart = cart.find((item) => item.item === food);
  if (foodInCart) {
    foodInCart.quantity += amount;
  } else {
    cart.push({ item: food, quantity: amount });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeFoodFromCart = (food) => {
  const cart = getCart();
  const foodInCart = cart.find((item) => item === food);
  if (foodInCart) {
    foodInCart.quantity -= 1;
    if (foodInCart.quantity === 0) {
      cart.splice(cart.indexOf(foodInCart), 1);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCart = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};

export { addFoodToCart, removeFoodFromCart, getCart };
