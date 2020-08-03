import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ char, visible }) => <p className="field">{visible && char}</p>;

Field.propTypes = {
  char: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Field;
