import React from 'react';

import UnknownWord from './UnknownWord';

export default {
  component: UnknownWord,
  title: 'Unknown word',
};

export const randomWord = () => <UnknownWord selectedLetters={[]} />;

export const filledWord = () => (
  <UnknownWord selectedLetters={'abcdefghijklmnopqrstuvwxyz'.split('')} />
);
