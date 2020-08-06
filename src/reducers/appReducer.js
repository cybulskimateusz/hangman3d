import { LOADED_MODELS, LOADED_WORD, AUTH_SCREEN_ACTIVE, TOGGLE_AUTH_SCREEN_ACTIVE } from 'constants/appConstants';

export const appState = {
  loadedModels: 0,
  loadedWord: 0,
  authScreenActive: false,
};

const appReducer = (state = appState, action) => {
  switch (action.type) {
    case LOADED_MODELS: return { ...state, loadedModels: action.payload };
    case LOADED_WORD: return { ...state, loadedWord: action.payload };
    case AUTH_SCREEN_ACTIVE: return { ...state, authScreenActive: action.payload };
    case TOGGLE_AUTH_SCREEN_ACTIVE: return { ...state, authScreenActive: !state.authScreenActive };
    default: return state;
  }
};

export default appReducer;
