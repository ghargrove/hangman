import memoizeOne from 'memoize-one';

/**
 * Get information about the number of correct and remaining letter guesses
 *
 * @param {{ selectedLetters: string[], unknownWordLetters: string[]}} lettersObj Object that contains the users selected letters and unknown words letters
 * @returns {Object} Object containing guess information
 */
const calculateGuessStats = ({ selectedLetters, unknownWordLetters }) => {
  console.warn('Called');
  const totalAllowedGuesses = 10;
  const numberOfCorrectGuesses = selectedLetters.filter(letter =>
    unknownWordLetters.includes(letter)
  ).length;
  const numberOfIncorrectGuesses =
    selectedLetters.length - numberOfCorrectGuesses;
  const numberOfUniqueUnknownLetters = Array.from(new Set(unknownWordLetters))
    .length;

  return {
    numberOfCorrectGuesses,
    numberOfGuessesRemaining: totalAllowedGuesses - numberOfIncorrectGuesses,
    numberOfIncorrectGuesses,
    numberOfUnknownLetters:
      numberOfUniqueUnknownLetters - numberOfCorrectGuesses,
    totalAllowedGuesses,
  };
};

// Equality function for determining if the selected letters changed
const areSelectedLettersEqual = (
  [{ selectedLetters: incomingSelectedLetters }],
  [{ selectedLetters: lastSelectedLetters }]
) => incomingSelectedLetters === lastSelectedLetters;

export const guessStats = memoizeOne(
  calculateGuessStats,
  areSelectedLettersEqual
);
