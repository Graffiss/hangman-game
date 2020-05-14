import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

const WordsAPI = () => {
  const [wordsData, setWordsData] = useState('');

  useEffect(() => {
    fetchData(setWordsData);
  }, []);

  return (
    <div>
      <h2>{wordsData}</h2>
    </div>
  );
};

export default WordsAPI;
