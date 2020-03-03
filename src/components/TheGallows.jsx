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
  `}
`;

// Center the hangman
const HangmanContainer = styled.div`
  height: 400px;
  margin: ${props => props.theme.spacing.medium} auto 0;
  width: 400px;
`;

const WinLossRecord = styled.div`
  display: flex;
  justify-content: flex-end;

  span:last-of-type {
    margin-left: ${props => props.theme.spacing.medium};
  }

  #win-label {
    color: ${props => props.theme.colors.green};
  }

  #loss-label {
    color: ${props => props.theme.colors.alert};
  }
`;

/**
 * Renders the "Hangman" along with an unknown word where
 * letters are replaced by underscores until they're guessed
 * by the user
 */

const TheGallows = ({ selectedLetters, winLossRecord }) => {
  const { randomWord } = useRandomWord();
  const { numberOfIncorrectGuesses } = guessStats({
    selectedLetters: Object.keys(selectedLetters),
    unknownWordLetters: randomWord,
  });

  // js-dom doesn't support canvas by default so don't render the
  // hangman in test mode
  return (
    <GallowsContainer>
      <UnknownWord randomWord={randomWord} selectedLetters={selectedLetters} />
      <HangmanContainer>
        {process.env.NODE_ENV !== 'test' && (
          <Hangman incorrectGuessCount={numberOfIncorrectGuesses}></Hangman>
        )}
      </HangmanContainer>
      <WinLossRecord>
        <span id="win-label">
          <strong>Wins:</strong> {winLossRecord.wins}
        </span>
        <span id="loss-label">
          <strong>Loses:</strong> {winLossRecord.losses}
        </span>
      </WinLossRecord>
    </GallowsContainer>
  );
};

TheGallows.propTypes = {
  winLossRecord: PropTypes.objectOf(PropTypes.number).isRequired,
  selectedLetters: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default TheGallows;
