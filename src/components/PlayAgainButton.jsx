import React from 'react';
import PropTypes from 'prop-types';

const PlayAgainButton = ({ onClick }) => (
  <button type="button" className="play_again_button" onClick={onClick}>
    Play Again
  </button>
);

PlayAgainButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlayAgainButton;
