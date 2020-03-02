import React from 'react';

import { useRandomWord } from '../hooks';
import RandomWordProvider from './RandomWordProvider';
import UnknownWord from './UnknownWord';

export default {
  component: UnknownWord,
  decorators: [storyFn => <RandomWordProvider>{storyFn()}</RandomWordProvider>],
  title: 'Unknown word',
};

export const unfilledWord = () => <UnknownWord selectedLetters={[]} />;

// Remove a few letters from the random
const PartialWord = () => {
  const { randomWord } = useRandomWord();
  const letters = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
  letters.delete(randomWord[0]);
  letters.delete(randomWord[1]);
  return <UnknownWord selectedLetters={Array.from(letters)} />;
};

export const partiallyFilledWord = () => <PartialWord />;

export const filledWord = () => (
  <UnknownWord selectedLetters={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')} />
);
