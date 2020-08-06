import React, { useState, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import AccountPanel from 'containers/AccountPanel';
import { useDispatch } from 'react-redux';
import { toggleAuthScreenActive } from 'actions/appActions';

import 'styles/AccountScreen.scss';

const AccountScreeen = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setIsActive(!isActive);
    dispatch(toggleAuthScreenActive());
  };

  return (
    <div className="account_screen">
      <button type="button" className="account_screen__button" onClick={clickHandler}>
        <i className="far fa-user" />
      </button>
      <CSSTransition
        in={isActive}
        timeout={200}
        classNames="account_screen__animation"
        unmountOnExit
      >
        <AccountPanel />
      </CSSTransition>
    </div>
  );
};

export default memo(AccountScreeen);
