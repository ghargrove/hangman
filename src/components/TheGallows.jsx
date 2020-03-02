import React from 'react';

import PropTypes from 'prop-types';

import { guessStats } from '../guessHelpers';
import { useRandomWord } from '../hooks';
import { Hangman } from './Hangman';
import UnknownWord from './UnknownWord';

const TheGallows = ({ selectedLetters }) => {
  const { randomWord } = useRandomWord();
  const { numberOfIncorrectGuesses } = guessStats({
    selectedLetters,
    unknownWordLetters: randomWord,
  });

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <h1>React Hangman</h1>
      <div style={{ width: '200px', height: '200px' }}>
        <Hangman incorrectGuessCount={numberOfIncorrectGuesses}></Hangman>
        <UnknownWord selectedLetters={selectedLetters} />
      </div>
    </div>
  );
};

TheGallows.propTypes = {
  selectedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TheGallows;
