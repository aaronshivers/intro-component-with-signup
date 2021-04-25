import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('Notification', () => {
  const notification = shallow(<Notification />);

  const text = 'Try it free 7 days then $20/mo. thereafter';

  test('the text should be `text`', () => {
    expect(notification.text()).toBe(text);
  });
});
