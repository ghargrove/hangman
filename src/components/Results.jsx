import React from 'react';

import PropTypes from 'prop-types';

import { guessStats } from '../guessHelpers';
import { useRandomWord } from '../hooks';
import Modal from './Modal';

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
      {didWin && (
        <Modal>
          <div onClick={handleReset}>You won</div>
        </Modal>
      )}
      {didLose && (
        <Modal>
          <div onClick={handleReset}>You lost</div>
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
