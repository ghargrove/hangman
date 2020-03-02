import React, { useEffect, useState } from 'react';
import { Hangman } from './components';

import RandomWord from './components/RandomWord';

import './App.css';

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
    <div className="App">
      <div className="container">
        <h1>React Hangman</h1>
        <Hangman incorrectGuessCount={10}></Hangman>
        <RandomWord knownLetters={selectedLetters} />
      </div>
    </div>
  );
};

export default App;
