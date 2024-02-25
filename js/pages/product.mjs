import { API_SQUARE_EYES } from "../common/constants.mjs";
import { doFetch} from "../utils/doFetch.mjs";
import { addToCart} from "../utils/addToCart.mjs";
import { hideLoader, showLoader } from "../utils/loader.mjs";


export async function init() {
    showLoader();
    try {
      displayMovieDetails();
    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
}

init();

// Product page details functions 
function getMovieId() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    return movieId;
} 

export async function renderMovieDetails() { 
    const response = await doFetch(API_SQUARE_EYES);
    const movies = response.data;
    const movieId = getMovieId();
    const movie = movies.find(movie => movie.id === movieId);
    
    const movieTitle = document.createElement("h1");
    movieTitle.textContent = movie.title; 

    const movieImg = document.createElement("img");
    movieImg.setAttribute("src", movie.image.url);

    const movieDescription = document.createElement("p");
    movieDescription.textContent = movie.description; 
    
    const movieGenre = document.createElement("p");
    movieGenre.textContent = `Genre: ${movie.genre}`; 

    const movieRating = document.createElement("p");
    movieRating.textContent = `Rating: ${movie.rating}`; 

    const movieReleaseYear = document.createElement("p");
    movieReleaseYear.textContent = `Released: ${movie.released}`;

    const moviePrice = document.createElement("p");
    const discountedPrice = document.createElement("p");
    if (movie.onSale) {
        moviePrice.textContent = `Price: ${movie.price} NOK`;
        moviePrice.classList.add("discounted-price");
        discountedPrice.textContent = `On sale: ${movie.discountedPrice} NOK`;
    } else {
        moviePrice.textContent = `Price: ${movie.price} NOK`;
    }

    const addToCartButton = document.createElement("button"); 
    addToCartButton.textContent = "Add to cart";
    addToCartButton.classList.add("add-to-cart-button");
    addToCartButton.classList.add("cta-button");
    addToCartButton.addEventListener("click", () => {
        addToCart(movie);
    });

    const movieDetails = document.createElement("div");
    movieDetails.append(movieTitle, movieImg, moviePrice, discountedPrice, movieDescription, movieGenre, movieRating, movieReleaseYear, addToCartButton);
    return movieDetails;
} 

async function displayMovieDetails(){
    const displayMovieContainer = document.getElementById("display-movie-container");
    const movieDetails = await renderMovieDetails();
    displayMovieContainer.append(movieDetails);
}

