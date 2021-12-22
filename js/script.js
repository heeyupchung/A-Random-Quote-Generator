// array of quote objects
let quotes = [
  {
    quote: "I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me.",
    book: "Philippians",
    verse: "4:12-13",
    version: "ESV"
  },
  {
    quote: "Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation.",
    book: "Habakkuk",
    verse: "3:17-18",
    version: "ESV"
  },
  {
    quote: "The LORD is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake.",
    book: "Psalm",
    verse: "4:12-13",
    version: "ESV"
  },
  {
    quote: "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.",
    book: "1 Corinthians",
    verse: "15:58",
    version: "ESV"
  },
  {
    quote: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    book: "Romans",
    verse: "8:28",
    version: "ESV"
  },
  {
    quote: "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
    book: "1 Thessalonians",
    verse: "5:16-18",
    version: "ESV"
  },  
  {
    quote: "For Christ also suffered once for sins, the righteous for the unrighteous, that he might bering us to God, being put to death in the flesh but made alive in the spirit,",
    book: "1 Peter",
    verse: "3:18",
    version: "ESV"
  },
  {
    quote: "he saved us, not beacuse of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit,",
    book: "Titus",
    verse: "3:5",
    version: "ESV"
  },  
  {
    quote: "I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.",
    book: "John",
    verse: "15:5",
    version: "ESV"
  },
  {
    quote: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    book: "Lamentations",
    verse: "3:22-23",
    version: "ESV"
  },
  {
    quote: "Hear, O Israel: The LORD our God, the LORD is one. You shall love the LORD your God with all your heart and with all your soul and with all your might.",
    book: "Deuteronomy",
    verse: "6:4-5",
    version: "ESV"
  }
];


//gets a random quote from the array of objects, quotes
function getRandomQuote() {
  let randomQuote;
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// prints out a random quote object's keys into formatted html
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="book"> ${randomQuote.book}`;

  if (randomQuote.verse) {
    html += `<span class="verse"> ${randomQuote.verse}</span>`;
  }

  if (randomQuote.version) {
    html += `<span class="version">, ${randomQuote.version}</span>`;
  }

  html += `</p>`;
  randomBgColor();
  document.getElementById('quote-box').innerHTML = html; 
  return html;
}

// random background color function
function randomBgColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${x} , ${y}, ${z})`;
  document.body.style.backgroundColor = bgColor;
}

//prints a new random quote every 7 seconds
setInterval(printQuote, 7000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);

