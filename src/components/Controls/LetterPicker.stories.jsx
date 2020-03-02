import React, { useState } from 'react';

import RandomWordProvider from '../RandomWordProvider';
import LetterPicker from './LetterPicker';

export default {
  decorators: [storyFn => <RandomWordProvider>{storyFn()}</RandomWordProvider>],
  module: LetterPicker,
  title: 'Letter picker',
};

const PickerWithState = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const handleLetterSelection = letter =>
    setSelectedLetters(prevLetters => [...prevLetters, letter]);
  return (
    <LetterPicker
      selectedLetters={selectedLetters}
      onLetterSelection={handleLetterSelection}
    ></LetterPicker>
  );
};

export const pickerControl = () => <PickerWithState />;
