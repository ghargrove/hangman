import styled, { css } from 'styled-components';

const LetterOption = styled.div`
  box-shadow: 2px 2px 5px #c9c9c9;
  color: #181719;
  line-height: 3rem;
  text-align: center;
  transition: background 0.3s, color 0.3s;

  ${({ theme: { colors, fontSize } }) => css`
    border-top: solid 1px ${colors.gray.lightest};
    border-left: solid 1px ${colors.gray.lightest};
    font-size: ${fontSize.large};
  `}

  /* If both props are false then the letter has not been chosen yet */
  ${({ existsInRandomWord, missingFromRandomWord, theme }) =>
    !existsInRandomWord &&
    !missingFromRandomWord &&
    css`
      :hover {
        background-color: #f9f9f9;
        color: ${theme.colors.green};
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
  
  ${({ existsInRandomWord, theme }) =>
    existsInRandomWord &&
    css`
      background-color: ${theme.colors.green};
      color: white;
    `}

  ${({ missingFromRandomWord, theme }) =>
    missingFromRandomWord &&
    css`
      background-color: ${theme.colors.gray.lightest};
      color: ${theme.colors.gray.lighter};
    `}
`;

// const LetterOption = React.memo(props => {
//   const { children, ...rest } = props;
//   console.warn(children)
//   return <Letter {...rest}>{children}</Letter>
// });
// LetterOption.displayName = 'LetterOption'

// LetterOption.propTypes = {
//   children: PropTypes.node.isRequired,
//   existsInRandomWord: PropTypes.bool.isRequired,
//   missingFromRandomWord: PropTypes.bool.isR
// }

export default LetterOption;
