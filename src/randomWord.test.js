import { getRandomWord, usedWords, words } from './randomWord';

it('returns a random word', () => {
  const originalLength = words.length;
  const word = getRandomWord();
  expect(typeof word).toBe('string');
  expect(usedWords.length).toBe(1);
  expect(words.length).toBe(originalLength - 1);
});

it('resets the words if theyre all used', () => {
  for (let i = 0; i <= 3716; i++) {
    getRandomWord();
  }
  expect(usedWords.length).toBe(1);
});
