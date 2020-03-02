import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

// Need to know
//

// const Props = {
//   selectedLetters: string[],
//   onLetterSelect
// }

const Letter = styled.div`
  border: solid 1px #efefef;
  box-shadow: 1px 1px 1px #181719;
  color: #181719;
  font-size: 3rem;
  font-family: 'Catamaran';
  text-align: center;
`;

const LetterGrid = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
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
