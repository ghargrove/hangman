import React from 'react';

import RandomWord from './RandomWord';

export default {
  component: RandomWord,
  title: 'Random word',
};

export const randomWord = () => <RandomWord knownLetters={[]} />;

export const filledWord = () => (
  <RandomWord knownLetters={'abcdefghijklmnopqrstuvwxyz'.split('')} />
);
