import styled from 'styled-components';

export const PrimaryHeadline = styled.h2`
  color: ${props => props.theme.colors.gray.darkest};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const PrimaryText = styled.p`
  color: ${props => props.theme.colors.gray.darkest};
  font-size: 1rem;
`;

export const SecondaryText = styled.p`
  color: ${props => props.theme.colors.gray.dark};
`;
