const CART = 'cart';
$(() => {
  const cart = JSON.parse(localStorage.getItem(CART));
  if(!cart) {
    localStorage.setItem(CART, JSON.stringify({ items: [] }));
  } else {
    cart.items.map((item) => {
      const id = item.id;
      if (id) {
        updateQTY(id, item.amount);
        updateCartButtonQTY(cart.items);
      }
    });
  }
});

addToCart = (product_id) => {
  const currentCart = JSON.parse(localStorage.getItem(CART));
  const items = currentCart.items;

  let index = items.findIndex(item => item.id === product_id);
  if (index === -1) {
    const newItem = { id: product_id, amount: 1 };
    index = items.push(newItem) - 1;
  } else {
    items[index].amount += 1;
  }

  localStorage.setItem(CART, JSON.stringify(currentCart));
  updateQTY(product_id, items[index].amount);
  updateCartButtonQTY(items);
}

updateQTY = (id, qty) => {
  domElement = document.getElementsByClassName('product_qty_' + id)[0];
  domElement.innerHTML = qty;
}

updateCartButtonQTY = (items) => {
  domElement = document.getElementsByClassName('cart_button')[0];
  const qty = items.reduce((acc, item) => acc += item.amount, 0);
  domElement.innerHTML = qty;
}