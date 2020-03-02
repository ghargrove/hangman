import React from 'react';

import PropsTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { PrimaryText } from '../components/Generic';
import { useRandomWord } from '../hooks';

const UnknownWordText = styled(PrimaryText)`
  background-color: white;
  text-align: center;

  ${({ theme: { fontSize, spacing } }) => css`
    font-size: ${fontSize.xlarge};
    letter-spacing: ${spacing.medium};
    padding: ${spacing.medium};
  `}
`;

/**
 * Displays an unknown random word w/ dashes rendered for letters
 * not included in `selectedLetters`
 *
 * ```javascript
 * <UnknownWord selectedLetters=['a', 'f', 'm'] />
 * ```
 *
 */
const UnknownWord = ({ selectedLetters }) => {
  const { randomWord } = useRandomWord();
  return (
    <UnknownWordText>
      {randomWord
        .map(letter => (selectedLetters.includes(letter) ? letter : '-'))
        .join('')}
    </UnknownWordText>
  );
};

UnknownWord.propTypes = {
  selectedLetters: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default UnknownWord;
