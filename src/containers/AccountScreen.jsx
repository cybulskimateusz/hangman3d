import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import AccountPanel from 'containers/AccountPanel';

const AccountScreeen = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsActive(!isActive)}>show</button>
      <CSSTransition
        in={isActive}
        timeout={200}
        classNames="account_screen"
        unmountOnExit
      >
        <AccountPanel />
      </CSSTransition>
    </>
  );
};

export default AccountScreeen;
