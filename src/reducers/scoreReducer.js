import { INCREMENT_SCORE, DECREMENT_SCORE, SET_SCORE } from 'constants/scoreConstants';

const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      return state + 1;
    case DECREMENT_SCORE:
      return state - 1;
    case SET_SCORE:
      return action.payload;
    default: return state;
  }
};

export default scoreReducer;
