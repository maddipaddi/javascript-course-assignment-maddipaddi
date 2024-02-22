
// Should there be a loading spinner for this action? 
export async function doFetch(url) {
    try {
        // Here is where the loading spinner would start. 
       const response = await fetch(url);
       const JSON = await response.json();
       return JSON;
    } catch (error) {
        console.log("The url could not be fetched: " + error);
        throw new Error(error); 
        // Is this correct error handling? 
    } finally {
        // Turn off loading spinner here if one is added. 
    }
}

