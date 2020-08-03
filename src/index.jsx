import React from 'react';
import ReactDOM from 'react-dom';
import Game from 'containers/Game';
import { Provider } from 'react-redux';
import store from 'store/store';

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);
ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
