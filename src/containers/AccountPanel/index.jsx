import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detectAuthentication } from 'actions/authActions';
import AccountForm from './AccountForm';
import LoginForm from './LoginForm';

export const CorrectForm = () => {
  const { isLoggedIn } = useSelector(({ authReducer }) => authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detectAuthentication());
  }, []);

  return isLoggedIn ? <AccountForm /> : <LoginForm />;
};

const AccountPanel = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <button type="button" className="account_button" onClick={() => setActive(!active)}>account</button>
      { active && <CorrectForm /> }
    </>
  );
};

export default AccountPanel;
