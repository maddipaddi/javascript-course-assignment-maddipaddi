import { displayMovies } from "./index.mjs";
import { API_SQUARE_EYES } from "../common/constants.mjs";
import { doFetch } from "../utils/doFetch.mjs";


let movies = [];

async function init() {
    try {
      const response = await doFetch(API_SQUARE_EYES);
      movies = response.data;
    } catch (error) {
        console.log(error);
    }
}

init();


// Genre filter 
function handleGenreFilter(e) {
    const movieListContainer = document.getElementById("movie-list-container");
    movieListContainer.innerHTML = "";
    const selectedGenre = e.target.value;
    if (selectedGenre === "all") {
        displayMovies(movies);
    } else {
        const filteredMovies = selectedGenre === "all" ? movies : movies.filter(movie => movie.genre === selectedGenre);
    displayMovies(filteredMovies);
    }
}

const genreDropdownList = document.getElementById("genre");
genreDropdownList.addEventListener("change", handleGenreFilter);


// Rating filter

function convertMovieRating(movie) {
    if (movie.rating >= 8 && movie.rating <= 10) {
        return "8-10";
    } else if (movie.rating >= 6 && movie.rating < 8) {
        return "6-8";
    } else if (movie.rating >= 4 && movie.rating < 6) {
        return "4-6";
    } else {
        return "1-4";
    }
}

function handleRatingFilter(e) {
    const movieListContainer = document.getElementById("movie-list-container");
    movieListContainer.innerHTML = "";
    const selectedRating = e.target.value;
    let filteredMovies;
    if (selectedRating === "all") {
        displayMovies(movies);
    } else {
        filteredMovies = movies.filter(movie => convertMovieRating(movie) === selectedRating);
        displayMovies(filteredMovies);
    }
}

const ratingDropdownList = document.getElementById("imbd-ratings");
ratingDropdownList.addEventListener("change", handleRatingFilter);

