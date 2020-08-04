import React, { memo } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import Field from 'components/Field';

import 'styles/MissedDisplay.scss';

const MissedDisplay = ({ missed }) => (
  <div className="missed_display">
    { missed && missed.map((char) => char && <Field char={char} visible key={uuid()} />) }
  </div>
);

MissedDisplay.propTypes = {
  missed: PropTypes.arrayOf(PropTypes.string),
};

MissedDisplay.defaultProps = {
  missed: ['*'],
};

export default memo(MissedDisplay);
