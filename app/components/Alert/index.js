import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function Alert({ color, message }) {
  const Div = styled.div`
    width: 70%;
    padding: 0.5em 1em;
    color: white;
    background: ${color};
    border: none;
    border-radius: 4px;
  `;

  return <Div>{message}</Div>;
}

export default Alert;
