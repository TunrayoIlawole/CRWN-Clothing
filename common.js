window.readStorage = ({key, isObject}) => {
  const item = localStorage.getItem(key);

  if(item){
    return isObject ? JSON.parse(item) : item
  }

  return isObject ? [] : 0
}

window.persistData = ({key,isObject, data}) => {
  localStorage.setItem(key, isObject ? JSON.stringify(data) : data);
}

window.renderCartItems = (cart, itemsInCart) => {
  domElements.cart.innerHTML = '';

  cart.forEach(cartItem => {
    const markUp = `
      <div class="cart-item">
        <div class="item-image">
          <img 
            src="assets/${cartItem.image}" 
            alt=${cartItem.name} 
          />
        </div>
        <div class="cart-item-details">
          <p>${cartItem.name}</p>
          <p>${cartItem.quantity} X N${cartItem.price}</p>
        </div>
      </div>
    `;

    domElements.cart.innerHTML += markUp;
  });

  domElements.itemCount.innerHTML = itemsInCart;
};
