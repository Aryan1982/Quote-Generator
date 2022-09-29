let apiQuotes=[];
var quotetext ={};
var authortext={};

// Show new Quote
function newQuote(){
	const randomquote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	quotetext = Object.values(randomquote)[0];
	authortext = Object.values(randomquote)[1];
	document.getElementById("quote").innerHTML=quotetext
	document.getElementById("author").innerHTML=authortext

}

//Tweet Quote

function tweetQuote(){
	const twitterURL=`https://twitter.com/intent/tweet?text=${quotetext} - ${authortext}`;
	window.open(twitterURL);
}
// Get Quotes from API

async function getQuotes(){
	const apiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
		// console.log(apiQuotes[12])
	} catch(error){
		// Catch Error Here
	}
}

getQuotes();