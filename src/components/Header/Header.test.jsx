import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  const header = shallow(<Header />);

  test('the text should be `Learn to code by watching others`', () => {
    expect(header.text()).toBe('Learn to code by watching others');
  });
});
