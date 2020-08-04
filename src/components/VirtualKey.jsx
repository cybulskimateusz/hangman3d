import React, { memo } from 'react';
import PropTypes from 'prop-types';
import notEmptyUnicode from 'utils/notEmptyUnicode';

const VirtualKey = ({ char }) => {
  const clickHandler = () => {
    const event = new KeyboardEvent('keydown', { key: char });
    window.dispatchEvent(event);
  };

  return <button type="button" className="virtual_key" onClick={clickHandler}>{notEmptyUnicode(char)}</button>;
};

VirtualKey.propTypes = {
  char: PropTypes.string.isRequired,
};

export default memo(VirtualKey);
