import React, { memo } from 'react';

import LogOutButton from 'components/LogOutButton';
import RemoveAccountButton from 'components/RemoveAccountButton';

const AccountForm = () => (
  <form className="account_form">
    <LogOutButton />
    <RemoveAccountButton />
  </form>
);

export default memo(AccountForm);
