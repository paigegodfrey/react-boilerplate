import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { AddString, mapDispatchToProps } from '../index';
import { changeString, addString, resetForm } from '../actions';
import configureStore from '../../../configureStore';

const renderer = new ShallowRenderer();

describe('<AddString />', () => {
  // eslint-disable-next-line no-unused-vars
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    renderer.render(
      <Provider store={store}>
        <AddString saveConfirmed={false} error={false} newString="" />
      </Provider>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeString', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeString).toBeDefined();
      });

      it('should dispatch changeString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const newString = 'text';
        result.onChangeString({ target: { value: newString } });
        expect(dispatch).toHaveBeenCalledWith(changeString(newString));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch addString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(addString());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });

    describe('clearForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.clearForm).toBeDefined();
      });

      it('should dispatch resetForm when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.clearForm();
        expect(dispatch).toHaveBeenCalledWith(resetForm());
      });
    });
  });
});
