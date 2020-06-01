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
import { addString, changeString } from './actions';
import {
  makeSelectAddString,
  makeSelectAddStringLoading,
  makeSelectAddStringError,
} from './selectors';
// import { addString, stringAdded, stringAddingError } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'addString';

export function AddString({
  newString,
  // loading,
  // error,
  onSubmitForm,
  onChangeString,
}) {
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
    </div>
  );
}

AddString.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  newString: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newStrings: makeSelectAddString(),
  loading: makeSelectAddStringLoading(),
  error: makeSelectAddStringError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      evt.preventDefault();
      dispatch(addString());
    },
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
