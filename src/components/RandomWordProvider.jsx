import React, { useState } from 'react';

import PropTypes from 'prop-types';
import randomWords from 'random-words';

// Store the random word
export const RandomWordContext = React.createContext();

// Get a random word and split into an array of uppercase letters
const randomWordLetters = () =>
  randomWords()
    .toUpperCase()
    .split('');

const RandomWordProvider = ({ children }) => {
  const [randomWord, setRandomWord] = useState(randomWordLetters());
  const changeRandomWord = () => setRandomWord(randomWordLetters());
  return (
    <RandomWordContext.Provider
      value={{
        randomWord,
        changeRandomWord,
      }}
    >
      {children}
    </RandomWordContext.Provider>
  );
};

RandomWordProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RandomWordProvider;
