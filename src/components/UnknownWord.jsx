import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { PrimaryText } from '../components/Generic';

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
 * <UnknownWord randomWord={['s', 'p', 'e', 'c']} selectedLetters=['a', 'f', 'm'] />
 * ```
 *
 */
const UnknownWord = ({ randomWord, selectedLetters }) => {
  return (
    <UnknownWordText>
      {randomWord
        .map(letter => (selectedLetters.includes(letter) ? letter : '-'))
        .join('')}
    </UnknownWordText>
  );
};

UnknownWord.propTypes = {
  randomWord: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UnknownWord;
