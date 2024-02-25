import { calculateCartTotalCost, getCart, removeFromCart } from "../utils/addToCart.mjs";


export function displayCart(movie) {
    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title; 

    const movieImg = document.createElement("img");
    movieImg.setAttribute("src", movie.image.url);
    movieImg.classList.add("movie-list-images");

    const moviePrice = document.createElement("p");
    if (movie.onSale) {
        moviePrice.textContent = `On sale: ${movie.discountedPrice} NOK`;
    } else {
        moviePrice.textContent = `Price: ${movie.price} NOK`;
    }

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classList.add("cta-button");
    removeButton.classList.add("lesser-cta");
    removeButton.addEventListener("click", () => {
        removeFromCart(movie);
        movieProduct.remove();
        displayOrderSummary();
    });

    const movieProduct = document.createElement("div");
    movieProduct.append(movieTitle, movieImg, moviePrice, removeButton);
    movieProduct.classList.add("cart-item")
    return movieProduct;
}

    function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    let cart = getCart();
    cart.forEach(movie => {
        cartContainer.append(displayCart(movie));
    });
}

renderCart(); 

export function displayOrderSummary() {
    let cart = getCart();
    const movieTitles = cart.map(movie => movie.title).join(", ");
    const cartMovies = document.querySelector(".movies-in-cart");
    cartMovies.textContent = `Movies: ${movieTitles}`;
    const totalCost = document.querySelector(".total-cost");
    totalCost.textContent = `Total price: ${calculateCartTotalCost()} NOK`; 
}

displayOrderSummary();

function checkoutCart() {
const paymentContainer = document.querySelector(".payment");
const checkoutButton = document.createElement("a");
checkoutButton.setAttribute("href", `/checkout-confirmation.html`);
checkoutButton.classList.add("cta-button");
checkoutButton.textContent = "Checkout";
paymentContainer.append(checkoutButton);
}

checkoutCart();