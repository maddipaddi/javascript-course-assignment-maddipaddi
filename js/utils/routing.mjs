import { setUpProductPage } from "./setUpProductPage.mjs";

export async function router() {
    const url = new URL(window.location.href);
    const path = url.pathname; 

    switch (path) {
        case "/": 
        case "/index.html":
            // call a function that sets up the movie list?
        break; 

        case "/contact.html":
        case "/contact/index.html":
        break; 

        case "/checkout.html":
        case "/checkout/index.html":
        break; 

        case "/checkout/confirmation.html":
        case "/checkout/confirmation/index.html":
        break; 

        case "/contact.html":
        case "/contact/index.html":
        break; 

        case "/login.html":
        case "/login/index.html":
        break; 

        case "/movies.html":
        case "/movies/index.html":
        break; 

        case "/product.html":
        case "/product/index.html":
            setUpProductPage();
        break; 

        case "/search.html":
        case "/search/index.html":
        break; 

        case "/signup.html":
        case "/signup/index.html":
        break; 

        default: 
        // Set up a 404 page.
        break; 
    }
}