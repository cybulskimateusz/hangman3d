import React from 'react';
import PropTypes from 'prop-types';
import PlayAgainButton from 'components/PlayAgainButton';

const GameOverScreen = ({ isActive, resetFunc }) => (isActive ? (
  <div className="end_game_box">
    <p>Game over</p>
    <PlayAgainButton onClick={resetFunc} />
  </div>
) : null);

GameOverScreen.propTypes = {
  resetFunc: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default GameOverScreen;
