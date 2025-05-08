
// Tutorial Code (Zero to Mastery)
let apiQuotes = [];

// Show New Quote
// function newQuote() {
//     // pick a random quote from apiQuotes array
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     console.lot(quote);
// }

// Get Quotes from API
async function getQuotes() {
    const apiURL = 'https://zenquotes.io/api/no-cors/';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        // newQuote();
        console.log(apiQuotes)
    } catch (error) {
        // Catch Error Here
    }
}


// On load
getQuotes();



// Trying Rapid API
// const url = 'https://quotes-api12.p.rapidapi.com/quotes';

// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-host': 'quotes-api12.p.rapidapi.com'
//     }
// };

// async function getQuotes() {
// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//     console.log(options);
// } catch (error) {
//     console.error(error);
//     }
// };

// getQuotes();