import React from 'react';
import { Body, Anchor, Wrapper } from './Terms.styles';

const Terms = () => (
  <Wrapper>
    <Body>
      By clicking the button, you are agreeing to our
      {' '}
      <Anchor>
        Terms and Services
      </Anchor>
    </Body>
  </Wrapper>
);

export default Terms;
