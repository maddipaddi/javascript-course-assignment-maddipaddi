//A function that finds the id of the current movie from the list of movies 




// Create a function that sets up a product details page.
// should include title, description, image, genre, price, onsale, discountedPrice, rating, released, tags (favorite..?)




export function setUpProductPage(movie) {
    
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

    const movieDetails = document.createElement("div");
    movieDetails.append(movieTitle, movieImg, moviePrice, movieDescription, movieGenre, movieRating, movieReleaseYear, buyButton);
    return movieDetails;
}

