import React from 'react';
import { Button, Wrapper } from './FormButton.styles';

const text = 'CLAIM YOUR FREE TRIAL';

const FormButton = () => (
  <Wrapper>
    <Button type="button">{text}</Button>
  </Wrapper>
);

export default FormButton;
