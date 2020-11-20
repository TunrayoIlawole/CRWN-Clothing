const domElements = {
    cartIcon: document.querySelector('.cart-icon'),
    itemCount: document.querySelector('.item-count'),
    cart: document.querySelector('.cart'),
    checkoutContainer: document.querySelector('.checkout-container'),
};

domElements.cartIcon.addEventListener('click', (e) => {
  domElements.cart.classList.toggle('show');
})

let cart = [];
let itemsInCart = 0;

window.addEventListener('load', () => {
  itemsInCart = window.readStorage({
    key: 'cartCount',
    isObject: false
  })

  cart = window.readStorage({
    key: 'cartItems',
    isObject: true
  })

  window.renderCartItems(cart, itemsInCart);
})
