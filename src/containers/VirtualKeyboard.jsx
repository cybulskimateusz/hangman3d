import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { CSSTransition } from 'react-transition-group';
import VirtualKey from 'components/VirtualKey';

import 'styles/VirtualKeyboard.scss';

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
    <div className="virtual_keyboard">
      <button type="button" className="virtual_keyboard__button" onClick={() => setIsActive(!isActive)}>
        <i className="far fa-keyboard" />
      </button>
      <CSSTransition
        in={isActive}
        timeout={200}
        classNames="virtual_keyboard__animation"
        unmountOnExit
      >
        <div className="virtual_keyboard__inner">
          <KeyMap ignore={ignore} />
        </div>
      </CSSTransition>
    </div>
  );
};

VirtualKeyboard.propTypes = {
  ignore: PropTypes.arrayOf(PropTypes.string),
};

VirtualKeyboard.defaultProps = {
  ignore: [],
};

export default memo(VirtualKeyboard);
