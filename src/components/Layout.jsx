import styled, { css } from 'styled-components';

// Utility functions to applying styles at various
// screens

export const onLargeScreens = styles => css`
  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.large}px) and (max-width: ${breakpoints.xlarge -
        1}px) {
      ${styles}
    }
  `}
`;

export const onMediumScreens = styles => css`
  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.medium}px) and (max-width: ${breakpoints.large -
        1}px) {
      ${styles}
    }
  `}
`;

export const onSmallScreens = styles => css`
  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.small}px) and (max-width: ${breakpoints.medium -
        1}px) {
      ${styles}
    }
  `}
`;

export const onTinyScreens = styles => css`
  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.small - 1}px) {
      ${styles}
    }
  `}
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${props => props.theme.spacing.medium};
  margin: 0 auto;
  max-width: 1200px;
  padding: ${props => props.theme.spacing.large} 0;

  ${onLargeScreens(css`
    max-width: 960px;
  `)}

  ${onMediumScreens(css`
    max-width: 720px;
  `)}

  ${onSmallScreens(css`
    max-width: 540px;
  `)}

  ${onTinyScreens(css`
    max-width: 90%;
  `)}

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export default Layout;
