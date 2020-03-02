import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { useRandomWord } from '../../hooks';
import { letterGuessCounts } from '../../letterUtilities';

const LetterGrid = styled.div`
  cursor: pointer;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
`;

const Letter = styled.div`
  border-top: solid 1px #efefef;
  border-left: solid 1px #efefef;
  box-shadow: 2px 2px 5px #c9c9c9;
  color: #181719;
  font-family: 'Catamaran';
  font-size: 3rem;
  text-align: center;
  transition: background 0.3s, color 0.3s;

  /* If both props are false then the letter has not been chosen yet */
  ${({ existsInRandomWord, missingFromRandomWord }) =>
    !existsInRandomWord &&
    !missingFromRandomWord &&
    css`
      :hover {
        background-color: #f9f9f9;
        color: green;
      }
    `}
  
  /* If either are true then the letter has already been selected */
  ${({ existsInRandomWord, missingFromRandomWord }) =>
    (existsInRandomWord || missingFromRandomWord) &&
    css`
      :hover {
        cursor: not-allowed;
      }
    `}
  
  ${({ existsInRandomWord }) =>
    existsInRandomWord &&
    css`
      background-color: green;
      color: white;
    `}

  ${({ missingFromRandomWord }) =>
    missingFromRandomWord &&
    css`
      background-color: #efefef;
      color: #a1a1a1;
    `}
`;

const LetterPickerHeadline = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
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

  const { numberOfGuessesRemaining } = letterGuessCounts({
    selectedLetters,
    unknownWordLetters: randomWord,
  });

  return (
    <div style={{ padding: '1rem' }}>
      <LetterPickerHeadline>
        <h2>Choose a letter:</h2>
        <span>Remaining guesses: {numberOfGuessesRemaining}</span>
      </LetterPickerHeadline>
      <LetterGrid>
        {alpha.map((letter, i) => (
          <Letter
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
          </Letter>
        ))}
      </LetterGrid>
    </div>
  );
};

LetterPicker.propTypes = {
  onLetterSelection: PropTypes.func.isRequired,
  selectedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LetterPicker;
