import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header';
import Info from './components/Info';
import Notification from './components/Notification';
import Form from './components/Form';
import Terms from './components/Terms';

describe('App', () => {
  const app = shallow(<App />);

  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should contain the Notification component', () => {
    expect(app.exists(Header)).toBeTruthy();
  });

  it('should contain the Terms component', () => {
    expect(app.exists(Info)).toBeTruthy();
  });

  it('should contain the Notification component', () => {
    expect(app.exists(Notification)).toBeTruthy();
  });

  it('should contain the Form component', () => {
    expect(app.exists(Form)).toBeTruthy();
  });

  it('should contain the Terms component', () => {
    expect(app.exists(Terms)).toBeTruthy();
  });
});
