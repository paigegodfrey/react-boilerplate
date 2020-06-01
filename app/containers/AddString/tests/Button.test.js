import React from 'react';
import { render } from 'react-testing-library';

import Button from '../Button';

describe('<Button />', () => {
  it('should render an <Button> tag', () => {
    const {
      container: { firstChild },
    } = render(<Button />);
    expect(firstChild.tagName).toEqual('BUTTON');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<Button />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<Button id={id} />);
    expect(firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<Button attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
