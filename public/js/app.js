const CART = "cart"
addToCart = () => {
  const current = localStorage.getItem(CART) || 0;
  const updatedCart = parseInt(current) + 1;
  localStorage.setItem(CART, updatedCart);
  console.log(localStorage.getItem(CART));
}