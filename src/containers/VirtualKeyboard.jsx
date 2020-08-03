import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { CSSTransition } from 'react-transition-group';
import VirtualKey from 'components/VirtualKey';

const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', ' '];

export const KeyMap = ({ ignore }) => chars.map((char) => !ignore.includes(char) && (
  <VirtualKey
    char={char}
    key={uuid()}
  />
));

const VirtualKeyboard = ({ ignore }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsActive(!isActive)}>show</button>
      <CSSTransition
        in={isActive}
        timeout={200}
        classNames="virtual_keyboard"
        unmountOnExit
      >
        <KeyMap ignore={ignore} />
      </CSSTransition>
    </>
  );
};

VirtualKeyboard.propTypes = {
  ignore: PropTypes.arrayOf(PropTypes.string),
};

VirtualKeyboard.defaultProps = {
  ignore: [],
};

export default VirtualKeyboard;
