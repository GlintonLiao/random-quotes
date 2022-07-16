import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons';
import QuoteAuthor from '../components/QuoteAuthor';
import QuoteText from '../components/QuoteText';
import './Quotes.css'

const Quotes = () => {

  const [state, setState] = useState({
    quote: "The Best Richness, is the Richness of Soul",
    author: "Prophet Muhammad(Peace be upon him)",
    color: "rgb(243 , 156 , 18)",
  });
  const [quotesData, setQuotesData] = useState([]);

  const fetchQuotes = () => {
    axios
      .get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then((res) => {
        const quotesData = [...res.data.quotes];
        // const color = randomColor();
        // document.body.style.color = color;
        // document.body.style.backgroundColor = color;

        setQuotesData(quotesData);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const randomColor = () => {
    const colorPatterns = "123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPatterns[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleClick = () => {
    let randomIdx = Math.floor(Math.random() * 16);
    let { quote, author } = quotesData[randomIdx];

    const color = randomColor();
    document.body.style.color = color;
    document.body.style.backgroundColor = color;

    setState({
      quote: quote,
      author: author,
      color: color,
    });

    console.log(randomIdx);
  };

  return (
    <div id='quote-box'>
      <QuoteText quote={state.quote} color={state.color} />
      <QuoteAuthor author={state.author} color={state.color} />
      <Buttons handleClick={handleClick} color={state.color} />
    </div>
  );
}

export default Quotes;
