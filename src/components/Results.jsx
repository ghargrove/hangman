import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { guessStats } from '../guessHelpers';
import { useRandomWord } from '../hooks';
import Modal from './Modal';
import { Button, PrimaryHeadline, SecondaryText } from './Generic';

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme: { colors, spacing } }) => css`
    h2,
    p {
      margin-bottom: ${spacing.medium};
    }

    strong {
      color: ${colors.alert};
    }
  `}
`;

/**
 * Displays a modal indicating whether user won or lost the game.
 * Also allows the user to reset the game.
 */
const Results = ({ selectedLetters, onReset }) => {
  const { changeRandomWord, randomWord } = useRandomWord();
  const { numberOfGuessesRemaining, numberOfUnknownLetters } = guessStats({
    selectedLetters,
    unknownWordLetters: randomWord,
  });

  const didWin = numberOfUnknownLetters === 0;
  const didLose = numberOfGuessesRemaining === 0;

  const handleReset = () => {
    changeRandomWord();
    onReset();
  };

  return (
    <React.Fragment>
      {(didWin || didLose) && (
        <Modal>
          <ResultsWrapper>
            <PrimaryHeadline data-testid="game-result">
              {didWin ? 'Congrats you won!' : 'Better luck next time!'}
            </PrimaryHeadline>
            {didLose && (
              <SecondaryText alignCenter>
                The word was: <strong>{randomWord.join('')}</strong>
              </SecondaryText>
            )}
            <Button onClick={handleReset}>Play again</Button>
          </ResultsWrapper>
        </Modal>
      )}
    </React.Fragment>
  );
};

Results.propTypes = {
  onReset: PropTypes.func.isRequired,
  selectedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Results;
