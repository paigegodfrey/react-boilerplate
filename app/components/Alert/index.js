import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

Alert.propTypes = {
  color: PropTypes.string,
  message: PropTypes.string,
};

export default Alert;
