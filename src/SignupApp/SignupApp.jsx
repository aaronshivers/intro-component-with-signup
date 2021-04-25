import React from 'react';
import { Container } from '../App.styles';
import Header from '../components/Header';
import Info from '../components/Info';
import Notification from '../components/Notification';
import Form from '../components/Form';
import Terms from '../components/Terms';
import FormContainer from '../components/FormContainer';

const SignupApp = () => (
  <Container>
    <Header />
    <Info />
    <Notification />
    <FormContainer />
  </Container>
);

export default SignupApp;
