import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { logoutUser } from 'actions/authActions';

const LogOutButton = () => {
  const dispatch = useDispatch();

  return <button className="account_form__button account_form__inner" type="button" onClick={() => dispatch(logoutUser())}> LogOut </button>;
};

export default memo(LogOutButton);
