import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeUser } from 'actions/authActions';
import { clearScore } from 'components/FirestoreScoreController';

const LogOutButton = () => {
  const { uid } = useSelector(({ authReducer }) => authReducer.user);
  const dispatch = useDispatch();

  const handleClick = async () => {
    await clearScore(uid);
    dispatch(removeUser());
  };

  return <button className="account_form__button account_form__inner" type="button" onClick={handleClick}> Remove my account </button>;
};

export default memo(LogOutButton);
