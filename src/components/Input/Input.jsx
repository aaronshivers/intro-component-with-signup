import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, Wrapper, Label } from './Input.styles';

const Input = ({
  type, name, onChange, onBlur, value, placeholder, errors,
}) => (
  <Wrapper>
    <Label className={errors ? 'error' : ''}>
      <StyledInput
        className={errors ? 'error' : ''}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
    </Label>
  </Wrapper>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.bool.isRequired,
};

export default Input;
