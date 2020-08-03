import React from 'react';
import ReactDOM from 'react-dom';
import Game from 'containers/Game';
import { Provider } from 'react-redux';
import store from 'store/store';
import AccountScreen from 'containers/AccountScreen';

const App = () => (
  <Provider store={store}>
    <AccountScreen />
    <Game />
  </Provider>
);
ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
