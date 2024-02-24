function createCart(){
let cart = [];
localStorage.setItem("cart", JSON.stringify(cart));
return cart;
}


function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart")); 
    if (!cart) {
        createCart();
    }
    console.log(cart);
    return cart; 
}


export function addToCart(movie) {
    const cart = getCart();
    cart.push(movie);
}