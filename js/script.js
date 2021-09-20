/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/***
 * `quotes` array
***/

let quotes = [
  {
    quote: 'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
    source: 'Robin Williams',
    citation: 'Dead Poets Society',
    year: 1989
  },
  {
    quote: 'It is not our abilities that show what we truly are... it is our choices.',
    source: 'Albus Dumbledore',
    citation: 'Harry Potter and the Chamber of Secrets',
    year: 1998
  },
  {
    quote: "Home isn't where you land; home is where you launch. You can't pick your home any more than you can choose your family.",
    source: 'Tayari Jones',
    citation: 'An American Marriage'
  },
  {
    quote: "To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation.",
    source: 'Yann Martel',
    citation: 'Life of Pi'
  },
  {
    quote: "Enthusiasm makes up for a host of deficiencies.",
    source: 'Barack Obama',
    citation: 'A Promised Land'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  let randomQuote;
  randomQuote += quotes[Math.floor(Math.random() * 4) + 1];
  return randomQuote;
}


/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}
    <span class="citation"> ${randomQuote.citation} </span>
    <span class="year"> ${randomQuote.year} </span>
  </p>`;
  if (quotes.citation) {

  }

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
