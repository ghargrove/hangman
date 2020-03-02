import React from 'react';

import PropsTypes from 'prop-types';

import { useRandomWord } from '../hooks';

/**
 * Displays an unknown random word w/ dashes rendered for letters
 * not included in `selectedLetters`
 *
 * ```javascript
 * <UnknownWord selectedLetters=['a', 'f', 'm'] />
 * ```
 *
 */
const UnknownWord = ({ selectedLetters }) => {
  const { randomWord } = useRandomWord();
  return (
    <div>
      {randomWord.map((letter, i) => (
        <span key={i} style={{ padding: '4px' }}>
          {selectedLetters.includes(letter) ? letter : '-'}
        </span>
      ))}
    </div>
  );
};

UnknownWord.propTypes = {
  selectedLetters: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default UnknownWord;
