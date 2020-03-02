import { guessStats } from './guessHelpers';

const selectedLetters = ['A', 'C', 'X'];
const unknownWordLetters = ['S', 'P', 'E', 'C'];

it('returns the number of incorrect guesses', () => {
  const { numberOfIncorrectGuesses } = guessStats({
    selectedLetters,
    unknownWordLetters,
  });
  expect(numberOfIncorrectGuesses).toEqual(2);
});

it('returns the number of correct guesses', () => {
  const { numberOfCorrectGuesses } = guessStats({
    selectedLetters,
    unknownWordLetters,
  });
  expect(numberOfCorrectGuesses).toEqual(1);
});

it('returns the number of remaining guesses', () => {
  const { numberOfGuessesRemaining } = guessStats({
    selectedLetters,
    unknownWordLetters,
  });
  expect(numberOfGuessesRemaining).toEqual(8);
});

it('returns the number of possible guesses', () => {
  const { totalAllowedGuesses } = guessStats({
    selectedLetters,
    unknownWordLetters,
  });
  expect(totalAllowedGuesses).toEqual(totalAllowedGuesses);
});
