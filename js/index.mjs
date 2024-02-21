
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

function createMovieListContent(movie){
    
    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title; 

    const movieImg = document.createElement("img");
    movieImg.setAttribute("src", movie.image.url);
    movieImg.classList.add("movie-list-images");

    const moviePrice = document.createElement("p");
    moviePrice.textContent = `Price: ${movie.price} NOK`; 

    const seeMoreButton = document.createElement("a"); 
    seeMoreButton.setAttribute("href", "/product.html");
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




