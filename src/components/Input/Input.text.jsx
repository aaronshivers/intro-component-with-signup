import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  const input = shallow(<Input />);

  it('should contain a HTML input element', () => {
    expect(input.exists(<input type="text" />)).toBeTruthy();
  });
});
