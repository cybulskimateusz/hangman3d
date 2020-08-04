import React, { memo } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import Field from 'components/Field';

import 'styles/ClueDisplay.scss';

const ClueDisplay = ({ clue, exposed }) => (
  <div className="clue_display">
    {
        clue && clue.split('').map((char) => {
          if (exposed.includes(char)) return <Field char={char} visible key={uuid()} />;
          return <Field char={char} visible={false} key={uuid()} />;
        })
    }
  </div>
);

ClueDisplay.propTypes = {
  clue: PropTypes.string,
  exposed: PropTypes.arrayOf(PropTypes.string),
};

ClueDisplay.defaultProps = {
  clue: 'wait...',
  exposed: ['w', 'a', 'i', 't', '.'],
};

export default memo(ClueDisplay);
