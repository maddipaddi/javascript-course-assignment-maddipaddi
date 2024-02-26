
import { API_SQUARE_EYES } from "../common/constants.mjs";
import { doFetch } from "../utils/doFetch.mjs";
import { showLoader, hideLoader } from "../utils/loader.mjs";


export async function init() {
    showLoader();
    try {
      const response = await doFetch(API_SQUARE_EYES);
      const movies = response.data;
      displayMovies(movies);
    } catch (error) {
        console.log("An error occurred: ", error);
        alert("An error occurred: " + "'" + error + "'." + " Please try again later.");
    } finally {
        hideLoader();
    }
}

init();


// Movie list on homepage functions
export function createMovieListContent(movie){
    
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

    const seeMoreButton = document.createElement("a"); 
    seeMoreButton.setAttribute("href", `product.html?id=${movie.id}`);
    seeMoreButton.classList.add("cta-button");
    seeMoreButton.classList.add("lesser-cta");
    seeMoreButton.textContent = "See more";

    const movieProduct = document.createElement("div");
    movieProduct.append(movieTitle, movieImg, moviePrice, seeMoreButton);
    return movieProduct;
}

export function displayMovies(movies){
    const movieListContainer = document.getElementById("movie-list-container");
    movies.forEach(movie => {
       
       movieListContainer.appendChild(createMovieListContent(movie)); 
    });

    
}

