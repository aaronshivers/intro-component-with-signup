import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header';

describe('App', () => {
  const app = shallow(<App />);

  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should contain the Header component', () => {
    expect(app.exists(Header)).toBeTruthy();
  });
});
