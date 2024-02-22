
import { API_SQUARE_EYES } from "./common/constants.mjs";
import { doFetch } from "./utils/doFetch.mjs";
import { router } from "./utils/routing.mjs";

async function main () {
    try {
      await router();
      const response = await doFetch(API_SQUARE_EYES);
      const movies = response.data;
      displayMovies(movies);
      console.log(movies);
    } catch (error) {
        console.log(error);
    }
}

main();


// Movie list on homepage functions
function createMovieListContent(movie){
    
    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title; 

    const movieImg = document.createElement("img");
    movieImg.setAttribute("src", movie.image.url);
    movieImg.classList.add("movie-list-images");

    const moviePrice = document.createElement("p");
    moviePrice.textContent = `Price: ${movie.price} NOK`; 

    const seeMoreButton = document.createElement("a"); 
    seeMoreButton.setAttribute("href", `/product.html?id=${movie.id}`);
    seeMoreButton.classList.add("cta-button");
    seeMoreButton.classList.add("lesser-cta");
    seeMoreButton.textContent = "See more";

    const movieProduct = document.createElement("div");
    movieProduct.append(movieTitle, movieImg, moviePrice, seeMoreButton);
    return movieProduct;
}

function displayMovies(movies){
    const movieListContainer = document.getElementById("movie-list-container");
    console.log(movieListContainer);
    movies.forEach(movie => {
       
       movieListContainer.appendChild(createMovieListContent(movie)); 
    });

    
}


// Product page details functions 
function getMovieId() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    return movieId;
} 

export async function renderMovieDetails() {
    const movieId = getMovieId();
    const response = await doFetch(API_SQUARE_EYES);
    const movies = response.data;
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
    moviePrice.textContent = `Price: ${movie.price} NOK`; 

    const buyButton = document.createElement("button"); 
    buyButton.textContent = "Buy now";
    buyButton.classList.add("cta-button");

    const movieDetails = document.createElement("div");
    movieDetails.append(movieTitle, movieImg, moviePrice, movieDescription, movieGenre, movieRating, movieReleaseYear, buyButton);
    return movieDetails;
} 

export async function displayMovieDetails(){
    const displayMovieContainer = document.getElementById("display-movie-container");
    const movieDetails = await renderMovieDetails();
    displayMovieContainer.append(movieDetails);

}

