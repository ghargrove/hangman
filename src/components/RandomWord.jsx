import React from 'react';

import PropsTypes from 'prop-types';

import { useRandomWord } from '../hooks';

/**
 * Displays a random word w/ dashes rendered for letters
 * not included in `selectedLetters`
 *
 * ```javascript
 * <RandomWord selectedLetters=['a', 'f', 'm'] />
 * ```
 *
 */
const RandomWord = ({ selectedLetters }) => {
  const { randomWord } = useRandomWord();
  const randomWordLetters = randomWord.toUpperCase().split('');

  return (
    <div>
      {randomWordLetters.map((letter, i) => (
        <span key={i} style={{ padding: '4px' }}>
          {selectedLetters.includes(letter) ? letter : '-'}
        </span>
      ))}
    </div>
  );
};

RandomWord.propTypes = {
  selectedLetters: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default RandomWord;
