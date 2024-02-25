import { getCart, removeFromCart } from "../utils/addToCart.mjs";


function displayCart(movie) {
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
    });

    const movieProduct = document.createElement("div");
    movieProduct.append(movieTitle, movieImg, moviePrice, removeButton);
    movieProduct.classList.add("cart-item")
    return movieProduct;
}

function renderCart() {
    const displayMovieContainer = document.getElementById("display-movie-container");
    let cart = getCart();
    cart.forEach(movie => {
        displayMovieContainer.append(displayCart(movie));
    });
}

renderCart(); 
