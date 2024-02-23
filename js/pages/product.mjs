import { API_SQUARE_EYES } from "../common/constants.mjs";
import { doFetch } from "../utils/doFetch.mjs";


async function init() {
    try {
      displayMovieDetails();
    } catch (error) {
        console.log(error);
    }
}

init();

// Product page details functions 
function getMovieId() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    return movieId;
} 

    async function renderMovieDetails() {
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
    moviePrice.textContent = `Price: ${movie.price} NOK`; 

    const buyButton = document.createElement("button"); 
    buyButton.textContent = "Buy now";
    buyButton.classList.add("cta-button");

    const movieDetails = document.createElement("div");
    movieDetails.append(movieTitle, movieImg, moviePrice, movieDescription, movieGenre, movieRating, movieReleaseYear, buyButton);
    return movieDetails;
} 

    async function displayMovieDetails(){
    const displayMovieContainer = document.getElementById("display-movie-container");
    const movieDetails = await renderMovieDetails();
    displayMovieContainer.append(movieDetails);
}

