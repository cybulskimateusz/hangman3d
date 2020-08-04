import React, { useState, memo } from 'react';

import SignUpButton from 'components/SignUpButton';
import GoogleAuthButton from 'components/GoogleAuthButton';
import LogInButton from 'components/LogInButton';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChange = (value) => setEmail(value);
  const passwordChange = (value) => setPassword(value);

  return (
    <form className="account_form">
      <EmailInput onChange={emailChange} />
      <PasswordInput onChange={passwordChange} />
      <LogInButton email={email} password={password} />
      <SignUpButton email={email} password={password} />
      <GoogleAuthButton />
    </form>
  );
};

export default memo(LoginForm);
