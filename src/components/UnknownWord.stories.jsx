import React from 'react';

import { alphabet } from '../letters';
import UnknownWord from './UnknownWord';

export default {
  component: UnknownWord,
  title: 'Unknown word',
};

const randomWord = 'HELLO'.split('');

export const unfilledWord = () => (
  <UnknownWord randomWord={randomWord} selectedLetters={[]} />
);

export const partiallyFilledWord = () => (
  <UnknownWord randomWord={randomWord} selectedLetters={['X', 'L']} />
);

export const filledWord = () => (
  <UnknownWord randomWord={randomWord} selectedLetters={alphabet} />
);
