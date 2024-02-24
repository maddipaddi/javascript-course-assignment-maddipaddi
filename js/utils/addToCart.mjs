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

//Add an update quantity if/when time