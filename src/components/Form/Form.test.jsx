import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import Input from '../Input';
import Button from '../Button';
import Terms from '../Terms';

describe('Form', () => {
  const form = shallow(<Form />);

  it('should contain 5 Input components', () => {
    expect(form.find(Input)).toHaveLength(5);
  });

  it('should contain 1 Button component', () => {
    expect(form.find(Button)).toHaveLength(1);
  });

  it('should contain 1 Terms component', () => {
    expect(form.find(Terms)).toHaveLength(1);
  });
});
