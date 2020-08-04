import React, { memo } from 'react';
import PropTypes from 'prop-types';
import notEmptyUnicode from 'utils/notEmptyUnicode';

const Field = ({ char, visible }) => <span className="field">{visible ? notEmptyUnicode(char) : '*'}</span>;

Field.propTypes = {
  char: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default memo(Field);
