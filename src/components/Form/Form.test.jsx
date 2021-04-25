import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import Input from '../Input';
import Button from '../FormButton';
import Terms from '../Terms';

describe('Form', () => {
  const form = shallow(<Form />);

  it('should contain 4 Input components', () => {
    expect(form.find(Input)).toHaveLength(4);
  });

  it('should contain 1 FormButton component', () => {
    expect(form.find(Button)).toHaveLength(1);
  });

  it('should contain 1 Terms component', () => {
    expect(form.find(Terms)).toHaveLength(1);
  });
});
