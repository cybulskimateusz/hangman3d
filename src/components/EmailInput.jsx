import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const EmailInput = ({ onChange }) => {
  const LOGIN_INPUT = 'login_input account_form__inner';
  const [className, setClassName] = useState(LOGIN_INPUT);

  const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const updateClassNames = (email) => {
    const isValid = validateEmail(email);
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
      type="email"
      name="email"
      placeholder="e-mail"
      onChange={changeHandler}
      className={className}
    />
  );
};

EmailInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(EmailInput);
