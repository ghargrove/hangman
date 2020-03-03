import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { getRandomWord } from '../randomWord';

// Store the random word
export const RandomWordContext = React.createContext();

// Get a random word and split into an array of uppercase letters
const randomWordLetters = testWord =>
  (testWord === undefined ? getRandomWord() : testWord).toUpperCase().split('');

const RandomWordProvider = ({ children, testWord }) => {
  const [randomWord, setRandomWord] = useState(randomWordLetters(testWord));
  const changeRandomWord = () => setRandomWord(randomWordLetters(testWord));
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
  testWord: PropTypes.string,
};

export default RandomWordProvider;
