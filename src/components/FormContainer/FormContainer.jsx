import React from 'react';
import Form from '../Form';
import Terms from '../Terms';
import { Wrapper } from './FormContainer.styles';

const FormContainer = () => (
  <Wrapper>
    <Form />
    <Terms />
  </Wrapper>
);

export default FormContainer;
