import { getCart } from "../utils/addToCart.mjs";

function displayBoughtMovies() {
    let cart = getCart();
    const movieTitles = cart.map(movie => movie.title).join(", ");
    return movieTitles;
}


function displayConfirmation() {
    const displayConfirmation = document.querySelector(".confirmation-message");
    const orderSummary = `${displayBoughtMovies()}`;
    const confirmationMessage = `Your payment was successful! Your order: ${orderSummary}. Your order was added to your account
    under the section “My movies”. You can start streaming immediately, or download to watch offline
    later.`
    displayConfirmation.textContent = `${confirmationMessage}`;
}

displayConfirmation();

function clearCart() {}