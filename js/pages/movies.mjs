import { displayMovies } from "./index.mjs";
import { API_SQUARE_EYES } from "../common/constants.mjs";
import { doFetch } from "../utils/doFetch.mjs";
import { hideLoader, showLoader } from "../utils/loader.mjs";


let movies = [];

async function init() {
    try {
      const response = await doFetch(API_SQUARE_EYES);
      movies = response.data;
      showLoader();
    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
}

init();


// Filtering 

function handleFiltering() {
    const movieListContainer = document.getElementById("movie-list-container");
    movieListContainer.innerHTML = '';

    const selectedGenre = genreDropdownList.value;
    const selectedRating = ratingDropdownList.value;

    let filteredMovies = movies;

    if (selectedGenre !== "all") {
        filteredMovies = filteredMovies.filter(movie => movie.genre === selectedGenre);
    }
    
        if (selectedRating !== "all") {
        filteredMovies = filteredMovies.filter(movie => convertMovieRating(movie) === selectedRating);
    }

    displayMovies(filteredMovies);
}

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

const genreDropdownList = document.getElementById("genre");
genreDropdownList.addEventListener("change", handleFiltering);
const ratingDropdownList = document.getElementById("imbd-ratings");
ratingDropdownList.addEventListener("change", handleFiltering);