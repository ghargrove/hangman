import styled from 'styled-components';

const Button = styled.button`
  border: none;
  color: green;
  font-family: 'Catamaran';
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 0;
  outline: none;
  text-transform: uppercase;
  transition: background 0.3s;

  :hover {
    background-color: #efefef;
    cursor: pointer;
  }
`;

export default Button;
