import React from 'react';
import {
  Body,
  Paragraph,
  Bold,
  Wrapper,
} from './Notification.styles';

const Notification = () => (
  <Wrapper>
    <Paragraph>
      <Bold>Try it free 7 days</Bold>
      {' '}
      then $20/mo. thereafter
    </Paragraph>
  </Wrapper>
);

export default Notification;
