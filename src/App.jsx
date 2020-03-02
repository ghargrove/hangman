import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Hangman } from './components';
import { LetterPicker } from './components/Controls';
import Layout from './components/Layout';
import RandomWord from './components/RandomWord';
import theme from './theme';

const App = () => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const [selectedLetters, setSelectedLetters] = useState([]);

  const updateSelectedLetters = () => {
    return window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * alpha.length + 1) - 1;
      const newLetter = alpha.split('')[randomIndex];
      console.warn(randomIndex);
      console.warn(newLetter);
      setSelectedLetters([...selectedLetters, newLetter]);
    }, 3000);
  };

  useEffect(() => {
    const handler = updateSelectedLetters();
    return () => window.clearInterval(handler);
  });

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
          <LetterPicker />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
