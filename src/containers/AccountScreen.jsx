import React, { useState, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import AccountPanel from 'containers/AccountPanel';

import 'styles/AccountScreen.scss';

const AccountScreeen = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="account_screen">
      <button type="button" className="account_screen__button" onClick={() => setIsActive(!isActive)}>
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
