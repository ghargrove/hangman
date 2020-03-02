import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { guessStats } from '../guessHelpers';
import { useRandomWord } from '../hooks';
import { Button } from './Controls';
import Modal from './Modal';
import { PrimaryHeadline, SecondaryText } from './Text';

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

const Results = ({ selectedLetters, onReset }) => {
  const { changeRandomWord, randomWord } = useRandomWord();
  const { numberOfGuessesRemaining, numberOfUnknownLetters } = guessStats({
    selectedLetters,
    unknownWordLetters: randomWord,
  });

  const didWin = numberOfUnknownLetters === 0;
  let didLose = numberOfGuessesRemaining === 0;

  const handleReset = () => {
    changeRandomWord();
    onReset();
  };

  didLose = true;

  return (
    <React.Fragment>
      {(didWin || didLose) && (
        <Modal>
          <ResultsWrapper>
            <PrimaryHeadline>
              {didWin ? 'Congrats you won!' : 'Better luck next time!'}
            </PrimaryHeadline>
            {didLose && (
              <SecondaryText style={{ textAlign: 'center' }}>
                The word was: {randomWord.join('')}
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
