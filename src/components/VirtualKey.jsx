import React from 'react';
import PropTypes from 'prop-types';

const VirtualKey = ({ char }) => {
  const clickHandler = () => {
    const event = new KeyboardEvent('keydown', { key: char });
    window.dispatchEvent(event);
  };

  return <button type="button" className="virtual_key" onClick={clickHandler}>{char}</button>;
};

VirtualKey.propTypes = {
  char: PropTypes.string.isRequired,
};

export default VirtualKey;
