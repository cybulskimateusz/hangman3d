import { INCREMENT_SCORE, DECREMENT_SCORE, SET_SCORE } from 'constants/scoreConstants';

export const incrementScore = () => ({
  type: INCREMENT_SCORE,
});

export const decrementScore = () => ({
  type: DECREMENT_SCORE,
});

export const setScore = (payload) => ({
  type: SET_SCORE,
  payload,
});
