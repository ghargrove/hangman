import React, { useState } from 'react';

import PropsTypes from 'prop-types';
import randomWords from 'random-words';

/**
 * Displays a random word w/ dashes rendered for letters
 * not included in `knownLetters`
 *
 * ```javascript
 * <RandomWord knownLetters=['a', 'f', 'm'] />
 * ```
 *
 */
const RandomWord = ({ knownLetters }) => {
  const [randomWordLetters] = useState(
    randomWords()
      .toUpperCase()
      .split('')
  );
  return (
    <div>
      {randomWordLetters.map((letter, i) => (
        <span key={i} style={{ padding: '4px' }}>
          {knownLetters.includes(letter) ? letter : '-'}
        </span>
      ))}
    </div>
  );
};

RandomWord.propTypes = {
  knownLetters: PropsTypes.arrayOf(PropsTypes.string),
};

export default RandomWord;
