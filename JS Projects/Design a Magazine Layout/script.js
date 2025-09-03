const quotes = [
  "🚀 The future belongs to those who code it.",
  "💡 Innovation is born from curiosity.",
  "🛠️ Every bug is just a puzzle waiting to be solved.",
  "🌌 Dream big, code bigger.",
  "📚 Keep learning, the best tool is knowledge.",
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-box").textContent = quotes[randomIndex];
}

// Run once on load
showRandomQuote();

// Optionally refresh the quote every 10 seconds
setInterval(showRandomQuote, 10000);
