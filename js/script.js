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
    quote: 'The greatest glory in living lies not in never failing, but in rising every time we fall',
    source: 'Nelson Mandela',
    citation: 'https://blog.hubspot.com/sales/famous-quotes'
  },
  {
    quote: 'What you do makes a difference, and you have to decide what kind of difference you want to make.',
    source: 'Jane Goodall',
    citation: 'https://www.snhu.edu/about-us/newsroom/education/personal-growth-quotes'
  },
  {
    quote: 'If there is no struggle, there is no progress.',
    source: 'Frederick Douglass',
    citation: 'https://www.snhu.edu/about-us/newsroom/education/personal-growth-quotes'
  },
  {
    quote: "I've got a theory that if you give 100% all the time, somehow things will work out in the end.",
    source: 'Larry Bird',
    citation: 'https://www.snhu.edu/about-us/newsroom/education/personal-growth-quotes'
  },
  {
    quote: "I've got a theory that if you give 100% all the time, somehow things will work out in the end.",
    source: 'Larry Bird',
    citation: 'https://www.snhu.edu/about-us/newsroom/education/personal-growth-quotes'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  let randomQuote = '';
  randomQuote += quotes[Math.floor(Math.random() * 4) + 1].quote;
  return randomQuote;
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
