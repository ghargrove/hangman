import React from 'react';

import styled from 'styled-components';

import { PrimaryHeadline, SecondaryText } from './Generic';

const DirectionsContainer = styled.div`
  grid-column: 1 / -1;
  margin-bottom: ${props => props.theme.spacing.medium};

  p {
    margin-top: 0.5rem;

    strong {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Directions = () => (
  <DirectionsContainer>
    <PrimaryHeadline alignCenter>React Hangman</PrimaryHeadline>
    <SecondaryText alignCenter>
      Select some letters... <strong>Solve the puzzle</strong>!
    </SecondaryText>
  </DirectionsContainer>
);

export default Directions;
