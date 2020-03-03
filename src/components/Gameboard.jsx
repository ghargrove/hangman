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
  const [winsAndLosses, setWinsAndLosses] = useState({
    losses: 0,
    wins: 0,
  });

  // Handle letter selection
  const handleLetterSelection = newLetter =>
    setSelectedLetters(prevLetters => ({
      ...prevLetters,
      ...newLetter,
    }));
  const handleGameReset = didWin => {
    setWinsAndLosses(prevState => {
      if (didWin) {
        return { ...prevState, wins: prevState.wins + 1 };
      } else {
        return { ...prevState, losses: prevState.losses + 1 };
      }
    });
    setSelectedLetters({});
  };

  return (
    <React.Fragment>
      <TheGallows
        selectedLetters={selectedLetters}
        winLossRecord={winsAndLosses}
      />
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
