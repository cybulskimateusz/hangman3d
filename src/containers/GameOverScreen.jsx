import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PlayAgainButton from 'components/PlayAgainButton';

import 'styles/GameOverScreen.scss';

const GameOverScreen = ({ isActive, resetFunc }) => isActive && (
  <div className="game_over_screen">
    <div className="game_over_screen__inner">
      <p>Game over</p>
      <PlayAgainButton onClick={resetFunc} />
    </div>
  </div>
);

GameOverScreen.propTypes = {
  resetFunc: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default memo(GameOverScreen);
