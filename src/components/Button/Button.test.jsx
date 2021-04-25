import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  const button = shallow(<Button />);

  const text = 'CLAIM YOUR FREE TRIAL';

  it('should contain an HTML button element', () => {
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    expect(button.find(<button type="button" />)).toBeTruthy();
  });

  test('the button text should be `text`', () => {
    expect(button.text()).toBe(text);
  });
});
