import React from 'react';
import { Formik } from 'formik';
import Input from '../Input';
import ErrorMessage from '../ErrorMessage';
import Button from '../FormButton';
import { Wrapper } from './Form.styles';

const onFormValidate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is a required field';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Looks like this is not an email';
  }

  if (!values.password) {
    errors.password = 'Password is a required field';
  }

  if (!values.firstName) {
    errors.firstName = 'First Name is a required field';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name is a required field';
  }

  return errors;
};

const Form = () => (
  <Wrapper>
    <Formik
      initialValues={{
        firstName: '', lastName: '', email: '', password: '',
      }}
      validate={onFormValidate}
      onSubmit={({ setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            placeholder="first name"
            errors={errors.firstName}
          />
          <ErrorMessage
            name="firstName"
            errors={errors}
            touched={touched}
          />
          <Input
            type="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            placeholder="last name"
            errors={errors.lastName}
          />
          <ErrorMessage
            name="lastName"
            errors={errors}
            touched={touched}
          />
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="email"
            errors={errors.email}
          />
          <ErrorMessage
            name="email"
            errors={errors}
            touched={touched}
          />
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="password"
            errors={errors.password}
          />
          <ErrorMessage
            name="password"
            errors={errors}
            touched={touched}
          />
          <Button />
        </form>
      )}
    </Formik>
  </Wrapper>
);

export default Form;
