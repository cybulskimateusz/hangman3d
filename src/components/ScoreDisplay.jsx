import React from 'react';
import { useSelector } from 'react-redux';

const ScoreDisplay = () => {
  const score = useSelector(({ scoreReducer }) => scoreReducer);
  return <div className="score_display">{score}</div>;
};

export default ScoreDisplay;
