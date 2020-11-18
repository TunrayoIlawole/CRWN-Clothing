const domElements = {
    container: document.querySelector('.container'),
    cartIcon: document.querySelector('.cart-icon'),
    addCart: document.querySelectorAll('.add-cart'),
    itemCount: document.querySelector('.item-count'),
    cart: document.querySelector('.cart'),
    hatOne: document.getElementById('hat-one')
};

let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
let counter7 = 0;
let counter8 = 0;
let counter9 = 0;
let counter10 = 0;
let counter11 = 0;
let counter12 = 0;

domElements.cartIcon,addEventListener('click', (e) => {
    if(e.target.closest('.cart-icon')) {
        domElements.cart.classList.toggle('show');
    }
})


domElements.container.addEventListener('click', (e) => {
    let itemName;
    let itemPrice;
    let markup;

    if(e.target.closest('.item')) {
        counter += 1;
    }
    domElements.itemCount.textContent = counter;
    if (e.target.id === 'hat-one') {
        counter1 += 1;
        itemName = e.target.parentElement.parentElement.lastElementChild.firstElementChild.textContent;
        itemPrice = e.target.parentElement.parentElement.lastElementChild.lastElementChild.textContent;

        markup = `
        <div class = "cart-item">
            <div class = "item-image">
                <img src = "assets/${e.target.parentElement.id}.png" />
            </div>
            <div class = "cart-item-details">
                <p>${itemName}</p>
                <p>${counter1} X ${itemPrice}</p>
            </div>
        </div>`;
        
        domElements.cart.insertAdjacentHTML('beforeend', markup);

    }
    if (e.target.id === 'hat-two') {
        counter2 += 1;
        itemName = e.target.parentElement.parentElement.lastElementChild.firstElementChild.textContent;
        itemPrice = e.target.parentElement.parentElement.lastElementChild.lastElementChild.textContent;

        markup = `
        <div class = "cart-item">
            <div class = "item-image">
                <img src = "assets/${e.target.parentElement.id}.png" />
            </div>
            <div class = "cart-item-details">
                <p>${itemName}</p>
                <p>${counter2} X ${itemPrice}</p>
            </div>
        </div>`;
        
        domElements.cart.insertAdjacentHTML('beforeend', markup);
    }
})





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