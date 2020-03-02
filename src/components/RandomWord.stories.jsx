import React from 'react';

import RandomWord from './RandomWord';

export default {
  component: RandomWord,
  title: 'Random word',
};

export const randomWord = () => <RandomWord selectedLetters={[]} />;

export const filledWord = () => (
  <RandomWord selectedLetters={'abcdefghijklmnopqrstuvwxyz'.split('')} />
);
