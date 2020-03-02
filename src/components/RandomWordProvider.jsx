import React, { useState } from 'react';

import PropTypes from 'prop-types';
import randomWords from 'random-words';

// Store the random word
export const RandomWordContext = React.createContext();

const RandomWordProvider = ({ children }) => {
  const [randomWord, setRandomWord] = useState(randomWords());
  const changeRandomWord = () => setRandomWord(randomWords());

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
