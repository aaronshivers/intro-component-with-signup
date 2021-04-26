import React from 'react';
import { Container } from '../../App.styles';
import Header from '../Header';
import Info from '../Info';
import Notification from '../Notification';
import FormContainer from '../FormContainer';
import { Section } from './SignupApp.styles';

const SignupApp = () => (
  <Container>
    <Section>
      <Header />
      <Info />
    </Section>
    <Section>
      <Notification />
      <FormContainer />
    </Section>
  </Container>
);

export default SignupApp;
