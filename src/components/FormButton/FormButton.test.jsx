import React from 'react';
import { shallow } from 'enzyme';
import FormButton from './FormButton';

describe('FormButton', () => {
  const formButton = shallow(<FormButton />);

  const text = 'CLAIM YOUR FREE TRIAL';

  it('should contain an HTML button element', () => {
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    expect(formButton.find(<button type="button" />)).toBeTruthy();
  });

  test('the button text should be `text`', () => {
    expect(formButton.text()).toBe(text);
  });
});
