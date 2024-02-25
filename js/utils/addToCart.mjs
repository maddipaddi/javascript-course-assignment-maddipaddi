
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
    const currentMovieId = movie.id;
    const movieAlreadyAdded = cart.some(movie => movie.id === currentMovieId);
    if (movieAlreadyAdded) {
        alert("You have already added this movie to your cart.");
    } else {
    cart.push(movie);
    localStorage.setItem("cart", JSON.stringify(cart));
}
}

export function removeFromCart(movie) {
    const movieToRemove = movie.id; 
    let cart = getCart();
    cart = cart.filter(item => item.id !== movieToRemove);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function calculateCartTotalCost() {
    let cart = getCart();
    const initialValue = 0;

    const cartTotalCost = cart.reduce((accumulator, movie) => {
        let currentMoviePrice = movie.onSale ? movie.discountedPrice : movie.price;
        return accumulator + currentMoviePrice;
    }, initialValue);
    return cartTotalCost;
}