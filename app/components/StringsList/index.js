import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

function StringsList({ loading, error, strings }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error !== false) {
    return <div>Something went wrong, please try again!</div>;
  }

  if (strings !== false) {
    return (
      <div>
        <ul>
          {strings.map(string => (
            <li key={uuid()}>{string}</li>
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
