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

/* TODO:
   1. create renderCheckoutItems that'll render the cart items using the markup in your checkout.html
   PS You have to actually create the elements cause you need to add event listeners to the increase, decrease and remove functions
   2. create increaseQuantity function (parameters: itemId)
   3. create reduceQuantity function (parameters: itemId)
   4. create removeItem function (parameters: itemId)
   5. Use these functions in your event listeners for the afore mentioned buttons in the P.S of number one
   6. Send money to Nifemi cause he's amazing (or just cake I feel like taking cake rn idk why)

 */
