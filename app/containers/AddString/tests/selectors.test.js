import {
  selectAddString,
  makeSelectAddStringSaved,
  makeSelectAddStringError,
  makeSelectAddString,
} from '../selectors';

describe('selectAddString', () => {
  it('should select the addString state', () => {
    const subState = {
      saveConfirmed: false,
      error: false,
      newString: '',
    };
    const mockedState = {
      addString: subState,
    };
    expect(selectAddString(mockedState)).toEqual(subState);
  });
});

describe('makeSelectAddStringSaved', () => {
  const savedConfirmedSelector = makeSelectAddStringSaved();
  it('should select saveConfirmed', () => {
    const saveConfirmed = false;
    const mockedState = {
      addString: {
        saveConfirmed,
      },
    };
    expect(savedConfirmedSelector(mockedState)).toEqual(saveConfirmed);
  });
});

describe('makeSelectAddStringError', () => {
  const errorSelector = makeSelectAddStringError();
  it('should select error', () => {
    const error = false;
    const mockedState = {
      addString: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectAddString', () => {
  const newStringSelector = makeSelectAddString();
  it('should select saveConfirmed', () => {
    const newString = 'test';
    const mockedState = {
      addString: {
        newString,
      },
    };
    expect(newStringSelector(mockedState)).toEqual(newString);
  });
});
