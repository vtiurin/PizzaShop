const CART = "cart"
addToCart = (product_id) => {
  const currentCart = JSON.parse(localStorage.getItem(CART)) || { products: [] };

  let currentProduct = currentCart.products.find(product => product.id == product_id);
  if(!currentProduct) {
    const newProduct = { id: product_id, amount: 1 };
    currentCart.products.push(newProduct);
  } else {
    currentProduct.amount += 1;
  }

  localStorage.setItem(CART, JSON.stringify(currentCart));
  console.log(localStorage.getItem(CART));
}