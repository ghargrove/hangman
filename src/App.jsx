import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { LetterPicker } from './components/Controls';
import Directions from './components/Directions';
import Footer from './components/Footer';
import Layout from './components/Layout';
import RandomWordProvider from './components/RandomWordProvider';
import Results from './components/Results';
import TheGallows from './components/TheGallows';
import theme from './theme';

import GlobalStyles from './components/GlobalStyles';

const App = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);

  // Handle letter selection.
  // Use a set as a safety against adding duplicate letters
  const handleLetterSelection = newLetter =>
    setSelectedLetters(prevLetters =>
      Array.from(new Set([...prevLetters, newLetter]))
    );

  const handleGameReset = () => setSelectedLetters([]);

  return (
    <RandomWordProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Directions />
          <TheGallows selectedLetters={selectedLetters} />
          <div>
            <LetterPicker
              onLetterSelection={handleLetterSelection}
              selectedLetters={selectedLetters}
            />
          </div>
          <Footer />
        </Layout>
        <Results onReset={handleGameReset} selectedLetters={selectedLetters} />
      </ThemeProvider>
    </RandomWordProvider>
  );
};

export default App;
