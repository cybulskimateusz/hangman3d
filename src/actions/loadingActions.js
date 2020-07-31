import { LOADED_MODELS, LOADED_WORD } from 'constants/loadingConstants';

export const setLoadedModels = (payload) => ({
  type: LOADED_MODELS,
  payload,
});

export const setLoadedWord = (payload) => ({
  type: LOADED_WORD,
  payload,
});
