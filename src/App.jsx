import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { LetterPicker } from './components/Controls';
import Layout from './components/Layout';
import RandomWordProvider from './components/RandomWordProvider';
import TheGallows from './components/TheGallows';
import theme from './theme';

import Results from './components/Results';

const App = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);

  // Handle letter selection.
  // Use a set as a safety against adding duplicate letters
  const handleLetterSelection = newLetter =>
    setSelectedLetters(Array.from(new Set([...selectedLetters, newLetter])));

  const handleResultReset = () => setSelectedLetters([]);

  return (
    <RandomWordProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <TheGallows selectedLetters={selectedLetters} />
          <div>
            <LetterPicker
              onLetterSelection={handleLetterSelection}
              selectedLetters={selectedLetters}
            />
          </div>
          <Results
            onReset={handleResultReset}
            selectedLetters={selectedLetters}
          />
        </Layout>
      </ThemeProvider>
    </RandomWordProvider>
  );
};

export default App;
