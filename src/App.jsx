import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Hangman } from './components';
import { LetterPicker } from './components/Controls';
import Layout from './components/Layout';
import RandomWord from './components/RandomWord';
import theme from './theme';

const App = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);

  // Handle letter selection.
  // Use a set as a safety against adding duplicate letters
  const handleLetterSelection = newLetter => {
    const letterSet = new Set(selectedLetters);
    letterSet.add(newLetter);
    console.warn(letterSet);
    setSelectedLetters(Array.from(letterSet));
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div style={{ backgroundColor: 'yellow' }}>
          <h1>React Hangman</h1>
          <div style={{ width: '200px', height: '200px' }}>
            <Hangman incorrectGuessCount={10}></Hangman>
            <RandomWord knownLetters={selectedLetters} />
          </div>
        </div>
        <div>
          <LetterPicker onLetterSelection={handleLetterSelection} />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
