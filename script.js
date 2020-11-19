const domElements = {
  container: document.querySelector('.container'),
  cartIcon: document.querySelector('.cart-icon'),
  addCart: document.querySelectorAll('.add-cart'),
  itemCount: document.querySelector('.item-count'),
  cart: document.querySelector('.cart'),
  hatOne: document.getElementById('hat-one')
};

let cart = [];
let itemsInCart = 0;

const categories = [
  {
    id: 'hats',
    name: 'Hats',
    items: [
      {
        name: 'Brown Brim',
        image: 'brown-brim.png',
        price: 25
      },
      {
        name: 'Brown Brim',
        image: 'brown-brim.png',
        price: 25
      },
      {
        name: 'Brown Brim',
        image: 'brown-brim.png',
        price: 25
      },
      {
        name: 'Brown Brim',
        image: 'brown-brim.png',
        price: 25
      },
    ]
  },
  {
    id: 'sneakers',
    name: 'Sneakers',
    items: [
      {
        name: 'Brown Brim',
        image: 'brown-brim.png',
        price: 25
      },
      {
        name: 'Brown Brim',
        image: 'brown-brim.png',
        price: 25
      },
      {
        name: 'Brown Brim',
        image: 'brown-brim.png',
        price: 25
      },
      {
        name: 'Brown Brim',
        image: 'brown-brim.png',
        price: 25
      },
    ]
  },
];

categories.forEach(category => {
  const categoryDiv = document.createElement('div');
  categoryDiv.classList.add('items-container');

  const categoryHeader = document.createElement('h2');
  categoryHeader.innerText = category.name;

  const itemsWrapper = document.createElement('div');
  itemsWrapper.classList.add('items');

  category.items.forEach((item, idx) => {
    const itemDiv = document.createElement('div');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('item');
    imageDiv.style.backgroundImage = `url('/assets/${item.image}')`;

    const addButton = document.createElement('button');
    addButton.classList.add('add-cart');
    addButton.innerText = 'Add to Cart';

    addButton.addEventListener('click', () => {
      const itemId = `${category.id}-${idx}`;

      const prevItem = cart.find(item => item.id === itemId);

      if (prevItem) {
        prevItem.quantity++;
      } else {
        cart.push({
          ...item,
          id: itemId,
          quantity: 1
        });
      }

      itemsInCart++

      renderCartItems()
    });

    imageDiv.append(addButton);


    const itemDetails = document.createElement('div');
    itemDetails.classList.add('item-details');

    const itemTitle = document.createElement('span');
    itemTitle.classList.add('title');
    itemTitle.innerText = item.name;

    const itemPrice = document.createElement('span');
    itemPrice.classList.add('price');
    itemPrice.innerText = item.price;

    itemDetails.append(itemTitle);
    itemDetails.append(itemPrice);

    itemDiv.append(imageDiv);
    itemDiv.append(itemDetails);

    itemsWrapper.append(itemDiv);
  });

  categoryDiv.append(categoryHeader);
  categoryDiv.append(itemsWrapper);

  domElements.container.append(categoryDiv);
});

const renderCartItems = () => {
  domElements.cart.innerHTML = '';

  /*
  * name
  * id
  * image
  * quantity
  * price
  * */

  cart.forEach(cartItem => {
    const markUp = `
      <div class="cart-item">
        <div class="item-image">
          <img 
            src="assets/${cartItem.image}" 
            alt=${cartItem.name} 
          />
        </div>
        <div class="item-details">
          <p>${cartItem.name}</p>
          <p>${cartItem.quantity} X ${cartItem.price}</p>
        </div>
      </div>
    `;

    domElements.cart.innerHTML += markUp
  });

  domElements.itemCount.innerHTML = itemsInCart

};

domElements.cartIcon.addEventListener('click', (e) => {
  if (e.target.closest('.cart-icon')) {
    domElements.cart.classList.toggle('show');
  }
});


// domElements.hatOne.addEventListener('click', () => {
//     counter += 1;
//     counter1 += 1
//     domElements.itemCount.textContent = counter;
//     let itemName = domElements.hatOne.parentElement.parentElement.lastElementChild.firstElementChild.textContent;
//     let itemPrice = domElements.hatOne.parentElement.parentElement.lastElementChild.lastElementChild.textContent;

//     let markup = `
//         <div class = "cart-item">
//             <div class = "item-image">
//                 <img src = "assets/${domElements.hatOne.parentElement.id}.png" />
//             </div>
//             <div class = "item-details">
//                 <p>${itemName}</p>
//                 <p>${counter1} X ${itemPrice}</p>
//             </div>
//         </div>`;

//         domElements.cart.innerHTML = markup;
// })
