import React from 'react';
import { shallow } from 'enzyme';
import Info from './Info';

describe('Info', () => {
  const info = shallow(<Info />);

  const text = 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.';

  test('the text should be `text``', () => {
    expect(info.text()).toBe(text);
  });
});
