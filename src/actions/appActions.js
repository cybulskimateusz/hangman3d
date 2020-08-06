import {
  LOADED_MODELS,
  LOADED_WORD,
  AUTH_SCREEN_ACTIVE,
  TOGGLE_AUTH_SCREEN_ACTIVE,
} from 'constants/appConstants';

export const setLoadedModels = (payload) => ({
  type: LOADED_MODELS,
  payload,
});

export const setLoadedWord = (payload) => ({
  type: LOADED_WORD,
  payload,
});

export const setAuthScreenActive = (payload) => ({
  type: AUTH_SCREEN_ACTIVE,
  payload,
});

export const toggleAuthScreenActive = () => ({
  type: TOGGLE_AUTH_SCREEN_ACTIVE,
});
