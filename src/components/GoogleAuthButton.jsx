import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { loginWithGoogle } from 'actions/authActions';

const GoogleAuthButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="google_auth_button account_form__button account_form__inner"
      onClick={() => {
        dispatch(loginWithGoogle());
      }}
    >
      <i className="fab fa-google" />
      <p>Play with Google</p>
    </button>
  );
};

export default memo(GoogleAuthButton);
