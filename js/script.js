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
    medium: 'movie',
    year: 1989
  },
  {
    quote: 'It is not our abilities that show what we truly are... it is our choices.',
    source: 'Albus Dumbledore',
    citation: 'Harry Potter and the Chamber of Secrets',
    medium: 'book',
    year: 1998
  },
  {
    quote: "Home isn't where you land; home is where you launch. You can't pick your home any more than you can choose your family.",
    source: 'Tayari Jones',
    citation: 'An American Marriage',
    medium: 'book'
  },
  {
    quote: "To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation.",
    source: 'Yann Martel',
    citation: 'Life of Pi',
    medium: 'book'
  },
  {
    quote: "Enthusiasm makes up for a host of deficiencies.",
    source: 'Barack Obama',
    citation: 'A Promised Land',
    medium: 'book'
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

  if (randomQuote.medium) {
    html += `<span class="medium">, ${randomQuote.medium}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }

  

  html += `</p>`;
  randomBgColor();
  document.getElementById('quote-box').innerHTML = html; 
  return html;
}

// took a look at https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php for help
function randomBgColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${x} , ${y}, ${z})`;
  document.body.style.backgroundColor = bgColor;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


//prints a new random quote every 10 seconds
setInterval(printQuote, 10000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);

