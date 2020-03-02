import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const LetterGrid = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

const Letter = styled.div`
  border-top: solid 1px #efefef;
  border-left: solid 1px #efefef;
  box-shadow: 2px 2px 5px #c9c9c9;
  color: #181719;
  font-size: 3rem;
  font-family: 'Catamaran';
  text-align: center;
  transition: background 0.3s, color 0.3s;

  :hover {
    background-color: #f9f9f9;
    color: green;
  }
`;

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const LetterPicker = ({ onLetterSelection }) => {
  // Click handler for `<Letter>`
  const handleLetterClick = ({ target: { textContent } }) =>
    onLetterSelection(textContent.trim());

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Choose a letter:</h2>
      <LetterGrid>
        {alpha.map((a, b) => (
          <Letter key={b} onClick={handleLetterClick}>
            {a}
          </Letter>
        ))}
      </LetterGrid>
    </div>
  );
};

LetterPicker.propTypes = {
  onLetterSelection: PropTypes.func.isRequired,
};

export default LetterPicker;
