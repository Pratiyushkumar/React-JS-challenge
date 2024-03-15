import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [tag, setTag] = useState();

  useEffect(() => {
    getQuote();
  }, []);

  async function getQuote() {
    const urlResponse = await axios.get(
      'https://api.quotable.io/quotes/random?tags=' + tag
    );
    console.log('urlResponse', urlResponse);
    const response = urlResponse.data;
    console.log('response', response);
    for (let i = 0; i < response.length; i++) {
      console.log('getting inside for loop');
      setQuote(response[i].content);
      setAuthor(response[i].author);
    }
  }

  return (
    <div>
      <p>{quote}</p>
      <p>{author}</p>
      <div>
        <label htmlFor='taginput'></label>
        <input
          id='taginput'
          type='text'
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
      <button onClick={() => getQuote()}>Generate</button>
    </div>
  );
};

export default QuoteGenerator;
