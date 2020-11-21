const domElements = {
    cartIcon: document.querySelector('.cart-icon'),
    itemCount: document.querySelector('.item-count'),
    cart: document.querySelector('.cart'),
    checkoutContainer: document.querySelector('.checkout-container'),
    checkoutItems: document.querySelector('.checkout-items'),
    totalButton: document.querySelector('.total'),
    total: document.querySelector('.total-amount')
};

domElements.cartIcon.addEventListener('click', (e) => {
  domElements.cart.classList.toggle('show');
})

let cart = [];
let itemsInCart = 0;

/* TODO:
   1. create renderCheckoutItems that'll render the cart items using the markup in your checkout.html
   PS You have to actually create the elements cause you need to add event listeners to the increase, decrease and remove functions
   2. create increaseQuantity function (parameters: itemId)
   3. create reduceQuantity function (parameters: itemId)
   4. create removeItem function (parameters: itemId)
   5. Use these functions in your event listeners for the afore mentioned buttons in the P.S of number one
   6. Send money to Nifemi cause he's amazing (or just cake I feel like taking cake rn idk why)
 */

window.getTotal = (cart) => {
  let total = 0;
  cart.forEach(item => {
    total += (item.price * item.quantity);
  });
  domElements.total.textContent = total;
}

 window.renderCheckoutItem = (cart) => {
  domElements.checkoutItems.innerHTML = '';
   cart.forEach(cartItem => {
    const checkoutDiv = document.createElement('div');
    checkoutDiv.classList.add('checkout-item');
    checkoutDiv.id = cartItem.id;

    const checkoutImage = document.createElement('div');
    checkoutImage.classList.add('checkout-item-image');
    checkoutImage.style.backgroundImage = `url('assets/${cartItem.image}')`;

    const checkoutTitle = document.createElement('p');
    checkoutTitle.classList.add('checkout-item-title');
    checkoutTitle.textContent = cartItem.name;

    const quantityDiv = document.createElement('div');
    quantityDiv.classList.add('quantity-container');

    const leftArrow = document.createElement('span');
    leftArrow.classList.add('arrow-left');
    leftArrow.textContent = '❮';

    const rightArrow = document.createElement('span');
    rightArrow.classList.add('arrow-right');
    rightArrow.textContent = '❯';

    const checkoutQuantity = document.createElement('span');
    checkoutQuantity.classList.add('quantity');
    checkoutQuantity.textContent = parseInt(cartItem.quantity, 10);

    const checkoutPrice = document.createElement('p');
    checkoutPrice.classList.add('checkout-item-price');
    checkoutPrice.textContent = parseInt(cartItem.price, 10);

    const removeButton = document.createElement('p');
    removeButton.classList.add('remove-item');
    removeButton.textContent = 'X';

    quantityDiv.appendChild(leftArrow);
    quantityDiv.appendChild(checkoutQuantity);
    quantityDiv.appendChild(rightArrow);


    leftArrow.addEventListener('click', (e) => {
      cartItem.quantity--;
      itemsInCart--;

      if(cartItem.quantity === 0) {
        let id = e.target.parentElement.parentElement.id;
        let ids, index;
        ids = cart.map(curr => {
        return curr.id;
        });

        index = ids.indexOf(id);

        if(index !== -1) {
          cart.splice(index, 1);
        }
      }
      window.renderCheckoutItem(cart);
      window.renderCartItems(cart, itemsInCart);
      window.getTotal(cart);
      window.persistData({key: 'cartItems', isObject: true, data: cart});
      window.persistData({key: 'cartCount', isObject: false, data: itemsInCart});
    });

    rightArrow.addEventListener('click', () => {
      cartItem.quantity++;
      itemsInCart++;
      window.renderCheckoutItem(cart);
      window.renderCartItems(cart, itemsInCart);
      window.getTotal(cart);
      window.persistData({key: 'cartItems', isObject: true, data: cart});
      window.persistData({key: 'cartCount', isObject: false, data: itemsInCart});
    });

    removeButton.addEventListener('click', (e) => {
      let id = cartItem.id;
      console.log(id);
      let ids, index;
      ids = cart.map(curr => {
        return curr.id;
      });

      index = ids.indexOf(id);
      if(index !== -1) {
        itemsInCart -= cart[index].quantity;
        cart.splice(index, 1);
      }

      window.renderCheckoutItem(cart);
      window.renderCartItems(cart, itemsInCart);
      window.getTotal(cart);
      window.persistData({key: 'cartItems', isObject: true, data: cart});
      window.persistData({key: 'cartCount', isObject: false, data: itemsInCart});
    });

    checkoutDiv.append(checkoutImage);
    checkoutDiv.append(checkoutTitle);
    checkoutDiv.append(quantityDiv);
    checkoutDiv.append(checkoutPrice);
    checkoutDiv.append(removeButton);

    domElements.checkoutItems.append(checkoutDiv);

   });
 };



domElements.totalButton.addEventListener('click', getTotal);

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
  window.renderCheckoutItem(cart);
  window.getTotal(cart);
  console.log(cart);
})