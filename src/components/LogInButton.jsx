import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser } from 'actions/authActions';

const LogInButton = ({ email, password }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="login_button account_form__button account_form__inner"
      onClick={() => {
        dispatch(loginUser(email, password));
      }}
    >
      LogIn
    </button>
  );
};

LogInButton.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default memo(LogInButton);
