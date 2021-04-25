import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should have the text `Hello!!!`', () => {
    expect(app.text()).toBe('Hello!!!');
  });
});
