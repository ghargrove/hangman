import randomWordList from './randomWords';

// Exporting these for testing purposes
export let words = randomWordList;
export let usedWords = [];

/**
 * Get a random word
 * @return {String} random word
 */
export const getRandomWord = () => {
  // Reset the words if we happen to cycle through them all
  if (words.length === 0) {
    words = usedWords;
    usedWords = [];
  }

  const randomIndex = Math.floor(Math.random() * words.length);
  const [word] = words.splice(randomIndex, 1);
  usedWords.push(word);
  return word;
};
