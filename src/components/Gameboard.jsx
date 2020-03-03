import React, { useState } from 'react';

import { LetterPicker } from './Controls';
import TheGallows from './TheGallows';
import Results from './Results';

/**
 * Displays the "gameboard" portion of the app. This will show the current
 * status of the "hangman" along with a control for selecting letters
 */
const Gameboard = () => {
  // The value of the object will indicate if the letter was in the unknown word
  // {'A': false, 'E': true}
  const [selectedLetters, setSelectedLetters] = useState({});

  // Handle letter selection
  const handleLetterSelection = newLetter =>
    setSelectedLetters(prevLetters => ({
      ...prevLetters,
      ...newLetter,
    }));
  const handleGameReset = () => setSelectedLetters({});

  return (
    <React.Fragment>
      <TheGallows selectedLetters={Object.keys(selectedLetters)} />
      <LetterPicker
        onLetterSelection={handleLetterSelection}
        selectedLetters={selectedLetters}
      />
      <Results
        onReset={handleGameReset}
        selectedLetters={Object.keys(selectedLetters)}
      />
    </React.Fragment>
  );
};

export default Gameboard;
