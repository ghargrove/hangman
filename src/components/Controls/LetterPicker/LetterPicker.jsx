import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useRandomWord } from '../../../hooks';
import { guessStats } from '../../../guessHelpers';
import { SecondaryText } from '../../Generic';
import LetterGrid from './LetterGrid';
import LetterOption from './LetterOption';

const LetterPickerContainer = styled.div`
  padding: ${props => props.theme.spacing.medium};
`;

const RemainingGuessCount = styled(SecondaryText)`
  margin-bottom: ${props => props.theme.spacing.medium};
  text-align: right;
`;

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const LetterPicker = ({ onLetterSelection, selectedLetters }) => {
  const { randomWord } = useRandomWord();

  // Click handler for `<Letter>`
  const handleLetterClick = ({ target: { textContent } }) => {
    const letter = textContent.trim();
    if (!selectedLetters.includes(letter)) {
      onLetterSelection(letter);
    }
  };

  const { numberOfGuessesRemaining } = guessStats({
    selectedLetters,
    unknownWordLetters: randomWord,
  });

  return (
    <LetterPickerContainer>
      <RemainingGuessCount>
        Remaining guesses: <strong>{numberOfGuessesRemaining}</strong>
      </RemainingGuessCount>
      <LetterGrid>
        {alpha.map((letter, i) => (
          <LetterOption
            key={i}
            existsInRandomWord={
              selectedLetters.includes(letter) && randomWord.includes(letter)
            }
            missingFromRandomWord={
              selectedLetters.includes(letter) && !randomWord.includes(letter)
            }
            onClick={handleLetterClick}
          >
            {letter}
          </LetterOption>
        ))}
      </LetterGrid>
    </LetterPickerContainer>
  );
};

LetterPicker.propTypes = {
  onLetterSelection: PropTypes.func.isRequired,
  selectedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LetterPicker;
