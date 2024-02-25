function createCart(){
let cart = [];
localStorage.setItem("cart", JSON.stringify(cart));
return cart;
}


export function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart")); 
    if (!cart) {
        createCart();
    }
    return cart; 
}


export function addToCart(movie) {
    let cart = getCart();
    cart.push(movie);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
}

//Add an update quantity or a not add more than once function  if/when time

export function removeFromCart(movie) {
    const movieToRemove = movie.id; 
    let cart = getCart();
    console.log(cart);
    cart = cart.filter(item => item.id !== movieToRemove);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
}