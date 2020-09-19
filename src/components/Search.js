import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('basketball');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchWikipedia = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });
      setResults(data.query.search);
    };

    searchWikipedia();
  }, [term]);

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            className='input'
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
