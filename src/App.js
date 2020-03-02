import React from 'react';
import { Hangman } from './components';

import RandomWord from './components/RandomWord';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>React Hangman</h1>
        <Hangman incorrectGuessCount={10}></Hangman>
        <RandomWord />
      </div>
    </div>
  );
};

export default App;
