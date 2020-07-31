import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer, { authState } from 'reducers/authReducer';
import loadingReducer, { loadingState } from 'reducers/loadingReducer';

const combinedReducers = combineReducers({ authReducer, loadingReducer });

const store = createStore(
  combinedReducers,
  {
    authReducer: authState,
    loadingReducer: loadingState,
  },
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
