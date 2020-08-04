import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PasswordInput = ({ onChange }) => {
  const LOGIN_INPUT = 'login_input account_form__inner';
  const [className, setClassName] = useState(LOGIN_INPUT);

  const validatePassword = (password) => {
    const regex = /^.{8,}$/;
    return regex.test(String(password).toLowerCase());
  };

  const updateClassNames = (email) => {
    const isValid = validatePassword(email);
    const isValidClass = !isValid && 'login_input--error';
    const currentClassNames = classNames(LOGIN_INPUT, isValidClass);
    setClassName(currentClassNames);
  };

  const changeHandler = ({ target }) => {
    const { value } = target;
    updateClassNames(value);
    onChange(value);
  };

  return (
    <input
      type="password"
      onChange={changeHandler}
      className={className}
    />
  );
};

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(PasswordInput);
