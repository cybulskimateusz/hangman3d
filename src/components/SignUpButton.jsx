import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { signUp } from 'actions/authActions';

const SignUpButton = ({ email, password }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="sign_up_button account_form__button account_form__inner"
      onClick={() => {
        dispatch(signUp(email, password));
      }}
    >
      SignUp
    </button>
  );
};

SignUpButton.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default SignUpButton;
