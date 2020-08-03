import React from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';

export const correctChar = ({ key }) => {
  const regex = /^[A-Za-z.-\s]$/;
  if (regex.test(key)) return key.toUpperCase();
  return null;
};

const KeyboardHandler = ({ onPressed, isActive }) => {
  const onKeyDown = (e) => {
    const result = correctChar(e);
    if (result) onPressed(result);
  };

  return isActive
    && (
    <EventListener
      target="window"
      onKeyDownCapture={onKeyDown}
    />
    );
};

KeyboardHandler.propTypes = {
  onPressed: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default KeyboardHandler;
