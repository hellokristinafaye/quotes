let apiQuotes = [];

// Show New Quote
function newQuote() {
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
}

// Get Quotes from API
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}


// On load
getQuotes();
