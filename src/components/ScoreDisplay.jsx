import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import 'styles/ScoreDisplay.scss';

const ScoreDisplay = () => {
  const score = useSelector(({ scoreReducer }) => scoreReducer);
  return <div className="score_display">{score}</div>;
};

export default memo(ScoreDisplay);
