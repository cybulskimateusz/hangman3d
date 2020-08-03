import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detectAuthentication } from 'actions/authActions';
import AccountForm from './AccountForm';
import LoginForm from './LoginForm';

const AccountPanel = () => {
  const { isLoggedIn } = useSelector(({ authReducer }) => authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detectAuthentication());
  }, []);

  return isLoggedIn ? <AccountForm /> : <LoginForm />;
};

export default AccountPanel;
