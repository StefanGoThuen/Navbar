import { useState, useEffect } from 'react';
import'./styles.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [copied, setCopied] = useState(false);

  const generateQuote = async () => {
    try {
      const response = await fetch(
        'https://type.fit/api/quotes');
      const quoteList = await response.json();
      const randomIdx = Math.floor(
        Math.random() * quoteList.length);
      const quoteText = quoteList[randomIdx].text;
      const auth =
        quoteList[randomIdx].author || 'Anonymous';

      setQuote(quoteText);
      setAuthor('~ ' + auth);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    generateQuote();
  }, []);

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = quote;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>{quote}</h1>
        <p>{author}</p>
        <hr />
        <div class="button-container">
          <button
            className="button"
            onClick={copyToClipboard}
            disabled={copied}
          >
            {copied ? 'kopiert!' : 'kopier'}
          </button>
          <button
            className="button2"
            onClick={generateQuote}>
            Neste quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
