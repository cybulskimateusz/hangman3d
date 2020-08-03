import React from 'react';
import Game from 'containers/Game';
import { Provider } from 'react-redux';
import store from 'store/store';
import AccountScreen from 'containers/AccountScreen';
import ScoreDisplay from 'components/ScoreDisplay';
import Loader from 'components/Loader';

const App = () => (
  <Provider store={store}>
    <Loader />
    <ScoreDisplay />
    <AccountScreen />
    <Game />
  </Provider>
);

export default App;
