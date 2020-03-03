import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useRandomWord } from '../../../hooks';
import { guessStats } from '../../../guessHelpers';
import { alphabet } from '../../../letters';
import { SecondaryText } from '../../Generic';
import LetterGrid from './LetterGrid';
import LetterOption from './LetterOption';

const LetterPickerContainer = styled.div`
  padding: ${props => props.theme.spacing.medium};
`;

const RemainingGuessCount = styled(SecondaryText)`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

/**
 * Renders a control that allows users to select letters by
 * clicking on them.
 */
const LetterPicker = ({ onLetterSelection, selectedLetters }) => {
  const { randomWord } = useRandomWord();

  const { numberOfGuessesRemaining } = guessStats({
    selectedLetters: Object.keys(selectedLetters),
    unknownWordLetters: randomWord,
  });

  // Click handler for `<Letter>`
  const handleLetterClick = ({ target: { textContent } }) => {
    const letter = textContent.trim();
    if (selectedLetters[letter] === undefined) {
      onLetterSelection({
        [letter]: randomWord.includes(letter),
      });
    }
  };

  return (
    <LetterPickerContainer>
      <RemainingGuessCount alignRight>
        Remaining guesses: <strong>{numberOfGuessesRemaining}</strong>
      </RemainingGuessCount>
      <LetterGrid>
        {alphabet.map((letter, i) => {
          const isSelected = selectedLetters[letter] !== undefined;
          return (
            <LetterOption
              key={i}
              existsInRandomWord={isSelected && selectedLetters[letter]}
              missingFromRandomWord={isSelected && !selectedLetters[letter]}
              onClick={handleLetterClick}
            >
              {letter}
            </LetterOption>
          );
        })}
      </LetterGrid>
    </LetterPickerContainer>
  );
};

LetterPicker.propTypes = {
  onLetterSelection: PropTypes.func.isRequired,
  selectedLetters: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default LetterPicker;
