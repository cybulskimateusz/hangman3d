import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer, { authState } from 'reducers/authReducer';
import appReducer, { appState } from 'reducers/appReducer';
import scoreReducer from 'reducers/scoreReducer';

const combinedReducers = combineReducers({ authReducer, appReducer, scoreReducer });

const store = createStore(
  combinedReducers,
  {
    authReducer: authState,
    appReducer: appState,
    scoreReducer: 0,
  },
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
