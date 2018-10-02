$(() => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart) {
    localStorage.setItem('cart', JSON.stringify({ items: [] }));
  } else {
    cart.items.map((item) => {
      const id = item.id;
      if (id) {
        updateQTY(id, item.amount);
      }
    });
  }
});

addToCart = (product_id) => {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  const items = currentCart.items;

  let index = items.findIndex(item => item.id === product_id);
  if (index === -1) {
    const newItem = { id: product_id, amount: 1 };
    index = items.push(newItem) - 1;
  } else {
    items[index].amount += 1;
  }

  localStorage.setItem('cart', JSON.stringify(currentCart));
  updateQTY(product_id, items[index].amount);
}

updateQTY = (id, qty) => {
  domElement = document.getElementsByClassName('product_qty_' + id)[0];
  domElement.innerHTML = qty;
}