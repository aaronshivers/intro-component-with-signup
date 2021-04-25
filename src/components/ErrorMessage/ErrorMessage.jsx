import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './ErrorMessage.styles';

const ErrorMessage = ({ name, errors, touched }) => (
  <Text>
    {errors[name] && touched[name] && errors[name]}
  </Text>
);

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
  touched: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};

export default ErrorMessage;
