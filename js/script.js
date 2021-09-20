/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


// array of quote objects

let quotes = [
  {
    quote: 'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
    source: 'Robin Williams',
    citation: 'Dead Poets Society',
    movie: 'movie',
    year: 1989
  },
  {
    quote: 'It is not our abilities that show what we truly are... it is our choices.',
    source: 'Albus Dumbledore',
    citation: 'Harry Potter and the Chamber of Secrets',
    book: 'book',
    year: 1998
  },
  {
    quote: "Home isn't where you land; home is where you launch. You can't pick your home any more than you can choose your family.",
    source: 'Tayari Jones',
    citation: 'An American Marriage',
    book: 'book'
  },
  {
    quote: "To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation.",
    source: 'Yann Martel',
    citation: 'Life of Pi',
    book: 'book'
  },
  {
    quote: "Enthusiasm makes up for a host of deficiencies.",
    source: 'Barack Obama',
    citation: 'A Promised Land',
    book: 'book'
  }
];


//gets a random quote from the array of objects, quotes

function getRandomQuote () {
  let randomQuote;
  randomQuote = quotes[Math.floor(Math.random() * 5)];
  return randomQuote;
}


// prints out a random quote object's keys into formatted html

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`;

  if (randomQuote.citation) {
    html += `<span class="citation"> ${randomQuote.citation}</span>`;
  }

  if (randomQuote.book) {
    html += `<span class="book">, ${randomQuote.book}</span>`;
  }

  if (randomQuote.movie) {
    html += `<span class="movie">, ${randomQuote.movie}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }

  

  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
  return html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
