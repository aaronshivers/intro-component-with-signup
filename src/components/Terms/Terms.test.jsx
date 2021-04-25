import React from 'react';
import { shallow } from 'enzyme';
import Terms from './Terms';

describe('Terms', () => {
  const terms = shallow(<Terms />);

  const text = 'By clicking the button, you are agreeing to our Terms and Services';

  test('the text should be `text``', () => {
    expect(terms.text()).toBe(text);
  });
});
