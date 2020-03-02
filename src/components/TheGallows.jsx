import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { guessStats } from '../guessHelpers';
import { useRandomWord } from '../hooks';
import { Hangman } from './Hangman';
import UnknownWord from './UnknownWord';

const GallowsContainer = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.gray.lightest};
    padding: ${spacing.medium};
    margin-right: ${spacing.xxlarge};
  `}
`;

// Center the hangman
const HangmanContainer = styled.div`
  height: 400px;
  margin: ${props => props.theme.spacing.medium} auto 0;
  width: 400px;
`;

// Renders the "Hangman" along with an unknown word where
// letters are replaced by underscores until they're guessed
// by the user
const TheGallows = ({ selectedLetters }) => {
  const { randomWord } = useRandomWord();
  const { numberOfIncorrectGuesses } = guessStats({
    selectedLetters,
    unknownWordLetters: randomWord,
  });

  return (
    <GallowsContainer>
      <UnknownWord selectedLetters={selectedLetters} />
      <HangmanContainer>
        <Hangman incorrectGuessCount={numberOfIncorrectGuesses}></Hangman>
      </HangmanContainer>
    </GallowsContainer>
  );
};

TheGallows.propTypes = {
  selectedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TheGallows;
