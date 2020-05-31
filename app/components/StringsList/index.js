import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import TextWrapper from './TextWrapper';
import Li from './Li';

function StringsList({ loading, error, strings }) {
  if (loading) {
    return <TextWrapper>Loading...</TextWrapper>;
  }

  if (error !== false) {
    return <TextWrapper>Something went wrong, please try again!</TextWrapper>;
  }

  if (strings !== false) {
    return (
      <div>
        <ul>
          {strings.map(string => (
            <Li key={uuid()}>{string}</Li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

StringsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  strings: PropTypes.any,
};

export default StringsList;
