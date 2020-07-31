import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer, { authState } from 'reducers/authReducer';
import loadingReducer, { loadingState } from 'reducers/loadingReducer';
import scoreReducer from 'reducers/scoreReducer';

const combinedReducers = combineReducers({ authReducer, loadingReducer, scoreReducer });

const store = createStore(
  combinedReducers,
  {
    authReducer: authState,
    loadingReducer: loadingState,
    scoreReducer: 0,
  },
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
