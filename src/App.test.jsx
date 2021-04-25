import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header';
import Info from './components/Info';
import Notification from './components/Notification';

describe('App', () => {
  const app = shallow(<App />);

  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should contain the Notification component', () => {
    expect(app.exists(Header)).toBeTruthy();
  });

  it('should contain the Info component', () => {
    expect(app.exists(Info)).toBeTruthy();
  });

  it('should contain the Notification component', () => {
    expect(app.exists(Notification)).toBeTruthy();
  });
});
