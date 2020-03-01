import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { Hangman } from './Hangman';
import { range } from 'lodash';
import { storiesOf } from '@storybook/react';

const HangmanContainer = props => {
  return <div {...props} style={{ width: '350px', ...props.style }}></div>;
};

HangmanContainer.propTypes = {
  style: PropTypes.object,
};

const HangmanCycle = () => {
  const guessCounts = range(0, 11);
  const timeoutRef = useRef();
  const [currentGuessCountIndex, setCurrentGuessCountIndex] = useState(0);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      const nextIndex = currentGuessCountIndex + 1;
      setCurrentGuessCountIndex(
        nextIndex > guessCounts.length - 1 ? 0 : nextIndex
      );
    }, 500);

    return () => clearInterval(timeoutRef.current);
  }, [currentGuessCountIndex, guessCounts.length]);

  const incorrectGuessCount = guessCounts[currentGuessCountIndex];
  return (
    <HangmanContainer>
      <p>Incorrect Guesses: {incorrectGuessCount}</p>
      <Hangman incorrectGuessCount={incorrectGuessCount}></Hangman>
    </HangmanContainer>
  );
};

storiesOf('Hangman', module)
  .add('Default State', () => {
    return (
      <HangmanContainer>
        <Hangman incorrectGuessCount={0}></Hangman>
      </HangmanContainer>
    );
  })
  .add('Parts Drawn', () => {
    return (
      <HangmanContainer>
        <Hangman incorrectGuessCount={7}></Hangman>
      </HangmanContainer>
    );
  })
  .add('Cycle', () => {
    return <HangmanCycle></HangmanCycle>;
  });
