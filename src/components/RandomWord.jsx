import React from 'react';

import randomWords from 'random-words';

const RandomWord = () => {
  const word = randomWords();
  return <div>{word}</div>;
};

export default RandomWord;
