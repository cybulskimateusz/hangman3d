import React from 'react';
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
      Play with Google
    </button>
  );
};

export default GoogleAuthButton;
