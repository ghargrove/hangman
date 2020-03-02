import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

  :hover {
    background-color: #f9f9f9;
    color: green;
  }

  ${({ existsInRandomWord }) =>
    existsInRandomWord &&
    css`
      background-color: green;
      color: white;
    `}

  ${({ missingFromRandomWord }) =>
    missingFromRandomWord &&
    css`
      background-color: red;
      color: white;
    `}
`;

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const LetterPicker = ({ onLetterSelection, selectedLetters }) => {
  // Click handler for `<Letter>`
  const handleLetterClick = ({ target: { textContent } }) =>
    onLetterSelection(textContent.trim());

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Choose a letter:</h2>
      <LetterGrid>
        {alpha.map((letter, i) => (
          <Letter
            key={i}
            existsInRandomWord={false}
            missingFromRandomWord={false}
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
