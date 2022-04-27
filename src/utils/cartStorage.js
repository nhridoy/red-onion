const addFoodToCart = (food, amount) => {
  const cart = getCart();
  let foodInCart;
  Object.keys(cart).length &&
    (foodInCart = Object.keys(cart).find((item) => item === food));

  if (foodInCart) {
    cart[food] += amount;
  } else {
    cart[food] = amount;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeFoodFromCart = (food) => {
  const cart = getCart();
  const foodInCart = cart.find((item) => item === food);
  if (foodInCart) {
    foodInCart.food -= 1;
    if (foodInCart.food === 0) {
      cart.splice(cart.indexOf(foodInCart), 1);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const updateFoodCart = (food, amount) => {
  const cart = getCart();
  const foodInCart = cart.find((item) => item.item === food);
  if (foodInCart) {
    foodInCart.food = amount;
    if (foodInCart.food < 1) {
      deleteFoodFromCart(food);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
};

const deleteFoodFromCart = (food) => {
  const cart = getCart();
  const foodInCart = cart.find((item) => item.item === food);
  if (foodInCart) {
    cart.splice(cart.indexOf(foodInCart), 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCart = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
};

export { addFoodToCart, removeFoodFromCart, updateFoodCart, getCart };
