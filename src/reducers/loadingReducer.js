import { LOADED_MODELS, LOADED_WORD } from 'constants/loadingConstants';

export const loadingState = {
  loadedModels: 0,
  loadedWord: 0,
};

const loadingReducer = (state = loadingState, action) => {
  switch (action.type) {
    case LOADED_MODELS: return { ...state, loadedModels: action.payload };
    case LOADED_WORD: return { ...state, loadedWord: action.payload };
    default: return state;
  }
};

export default loadingReducer;
