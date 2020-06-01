/**
 *
 * AddString
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Alert from 'components/Alert';
import Input from './Input';
import Button from './Button';
import { addString, changeString, resetForm } from './actions';
import {
  makeSelectAddString,
  makeSelectAddStringSaved,
  makeSelectAddStringError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'addString';

export function AddString({
  newString,
  saveConfirmed,
  error,
  onChangeString,
  onSubmitForm,
  clearForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    clearForm();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Create New String</title>
        <meta name="description" content="create new string" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="newString">
          <Input
            id="newString"
            type="text"
            placeholder="Enter text..."
            value={newString}
            onChange={onChangeString}
          />
        </label>
        <Button>Submit</Button>
      </form>
      {error !== false ? (
        <Alert color="#F44336" message="Please input valid string" />
      ) : null}
      {saveConfirmed ? (
        <Alert color="#4CAF50" message="String added successfully!" />
      ) : null}
    </div>
  );
}

AddString.propTypes = {
  saveConfirmed: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  newString: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeString: PropTypes.func,
  clearForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newStrings: makeSelectAddString(),
  saveConfirmed: makeSelectAddStringSaved(),
  error: makeSelectAddStringError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      evt.preventDefault();
      dispatch(addString());
    },
    clearForm: () => dispatch(resetForm()),
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
