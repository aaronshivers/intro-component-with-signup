import React from 'react';
import { Body, Wrapper } from './Info.styles';

const text = 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.';

const Info = () => (
  <Wrapper>
    <Body>
      {text}
    </Body>
  </Wrapper>
);

export default Info;
