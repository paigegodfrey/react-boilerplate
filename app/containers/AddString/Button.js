import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 0.5em 2em;
  margin: 1em 0;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid black;
  color: #black;

  &:hover {
    background: black;
    color: #ffffff;
  }
`;

export default Button;
