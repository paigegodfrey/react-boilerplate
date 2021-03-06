/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import StringsList from 'components/StringsList';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadStrings } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'home';

export function HomePage({ loading, error, strings, fetchStrings }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    fetchStrings();
  }, []);

  const stringsListProps = {
    loading,
    error,
    strings,
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="view all strings" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <StringsList {...stringsListProps} />
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  fetchStrings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchStrings: () => dispatch(loadStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
