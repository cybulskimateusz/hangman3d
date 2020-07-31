import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer, { authState } from 'reducers/authReducer';

const combinedReducers = combineReducers({ authReducer });

const store = createStore(
  combinedReducers,
  { authReducer: authState },
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
