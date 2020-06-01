/**
 *
 * AddString
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Input from './Input';
import Button from './Button';
import {
  makeSelectAddString,
  // makeSelectAddStringLoading,
  // makeSelectAddStringError,
} from './selectors';
// import { addString, stringAdded, stringAddingError } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'addString';

export function AddString() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <Helmet>
        <title>Create New String</title>
        <meta name="description" content="create new string" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <form
      // onSubmit={onSubmitForm}
      >
        <label htmlFor="newString">
          <Input
            id="newString"
            type="text"
            placeholder="Enter text..."
            // value={newString}
            // onChange={onChangeString}
          />
        </label>
        <Button>Submit</Button>
      </form>
    </div>
  );
}

AddString.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addString: makeSelectAddString(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddString);
