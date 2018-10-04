const CART = 'cart';
$(() => {
  if (window.location.pathname === "/") {
    setQTYonProductButtons();
    setQTYonCartButton();
  }

  if (window.location.pathname === "/cart") {
    setQTYonCartButton();
    setTotalQTYfield();
  }
});

getCartObjectFromStorage = () => {
  const cart = JSON.parse(localStorage.getItem(CART));
  return cart ? cart : { items: [] };
}

setCartObject = (newCart) => {
  localStorage.setItem(CART, JSON.stringify(newCart));
}

setQTYonProductButtons = () => {
  const cart = getCartObjectFromStorage();
  const items = cart.items;
  if (items.length > 0) {
    items.map((item) => updateQTY(item.id, item.amount));
  }
}

setQTYonCartButton = () => {
  const cart = getCartObjectFromStorage();
  updateCartButtonQTY(cart.items);
}

setTotalQTYfield = () => {
  const cart = getCartObjectFromStorage();
  cart.items.map((item) => updateQTYField(item.id, item.amount));
}

updateQTYField = (id, qty) => {
  domElement = document.getElementsByClassName('item-total-qty_' + id)[0];
  domElement.innerHTML = qty;
}

addToCart = (product_id) => {
  const currentCart = getCartObjectFromStorage();
  const items = currentCart.items;

  let index = items.findIndex(item => item.id === product_id);
  if (index === -1) {
    const newItem = { id: product_id, amount: 1 };
    index = items.push(newItem) - 1;
  } else {
    items[index].amount += 1;
  }

  setCartObject(currentCart);
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

something = () => {
  console.log('something()');
  const xhr = new XMLHttpRequest();
  const body = JSON.stringify(getCartObjectFromStorage());
  console.log(body);
  xhr.open('POST', '/cart', true);
  xhr.send(body);
  xhr.onreadystatechange = () => window.location.href = '/cart';
}