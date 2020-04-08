import * as React from "react";
import { faRetweet, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

const quotes = [
  {
    author: "John Lennon",
    text:
      "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life"
  },
  {
    author: "Steve Jobs",
    text: "Your time is limited, so don’t waste it living someone else’s life."
  },
  {
    author: "Florence Nightingale",
    text: "I attribute my success to this: I never gave or took any excuse."
  }
];

const getRandomPasteleColor = () => {
  const rand = Math.floor(Math.random() * 10);
  const colorQ =
    "rgb(" +
    (215 - rand * 3) +
    "," +
    (185 - rand * 5) +
    "," +
    (185 - rand * 10) +
    " )";
  return colorQ;
};

export default function App() {
  const [quote, setQuote] = React.useState({
    text: "Loading random quote...",
    author: "Author Name"
  });

  React.useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const getTwitterUrlData = () => {
    const text = encodeURI(`"${quote.text}" ${quote.author}`);
    console.log(text);
    const hashtags = "quotes";
    return `text=${text}&hashtags=${hashtags}`;
  };

  const randomColor = getRandomPasteleColor();

  return (
    <div
      id="quote-container"
      style={{
        backgroundColor: randomColor,
        transition: "background-color 0.5s ease"
      }}
    >
      <div id="quote-box" style={{ color: randomColor }}>
        <div id="text">
          <FontAwesomeIcon id="quote-icon" icon={faQuoteRight} />
          {quote.text}
        </div>
        <div id="author">{` - ${quote.author}`}</div>
        <div id="actions">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?${getTwitterUrlData()}`}
            rel="noopener noreferrer"
            target="_blank"
            style={{ backgroundColor: randomColor }}
          >
            <FontAwesomeIcon id="tweet-icon" icon={faRetweet} />
          </a>
          <button
            id="new-quote"
            onClick={fetchRandomQuote}
            style={{ backgroundColor: randomColor }}
          >
            New quote
          </button>
        </div>
        <div id="by">by Janez</div>
      </div>
    </div>
  );
}
