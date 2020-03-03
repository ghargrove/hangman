import styled from 'styled-components';

const Button = styled.button`
  border: none;
  color: ${props => props.theme.colors.green};
  font-family: 'Catamaran';
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: 700;
  padding: ${props => props.theme.spacing.medium};
  outline: none;
  text-transform: uppercase;
  transition: background 0.3s;

  :hover {
    background-color: ${props => props.theme.colors.gray.lightest};
    cursor: pointer;
  }
`;

export default Button;
