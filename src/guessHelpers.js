/**
 * Get information about the number of correct and remaining letter guesses
 *
 * @param {{ selectedLetters: string[], unknownWordLetters: string[]}} lettersObj Object that contains the users selected letters and unknown words letters
 * @returns {Object} Object containing guess information
 */
export const guessStats = ({ selectedLetters, unknownWordLetters }) => {
  const totalAllowedGuesses = 10;
  const numberOfCorrectGuesses = selectedLetters.filter(letter =>
    unknownWordLetters.includes(letter)
  ).length;
  const numberOfIncorrectGuesses =
    selectedLetters.length - numberOfCorrectGuesses;

  return {
    numberOfCorrectGuesses,
    numberOfGuessesRemaining: totalAllowedGuesses - numberOfIncorrectGuesses,
    numberOfIncorrectGuesses,
    totalAllowedGuesses,
  };
};
