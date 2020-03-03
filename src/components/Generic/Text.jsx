import styled, { css } from 'styled-components';

const sharedTextStyles = css`
  ${({ alignCenter }) =>
    alignCenter &&
    css`
      text-align: center;
    `}

  ${({ alignLeft }) =>
    alignLeft &&
    css`
      text-align: left;
    `}

  ${({ alignRight }) =>
    alignRight &&
    css`
      text-align: right;
    `}
`;

export const PrimaryHeadline = styled.h2`
  ${sharedTextStyles}
  color: ${props => props.theme.colors.gray.darkest};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const PrimaryText = styled.p`
  ${sharedTextStyles}
  color: ${props => props.theme.colors.gray.darkest};
  font-size: 1rem;
`;

export const SecondaryText = styled(PrimaryText)`
  color: ${props => props.theme.colors.gray.dark};
`;
