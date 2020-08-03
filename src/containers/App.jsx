import React from 'react';
import Game from 'containers/Game';
import { Provider } from 'react-redux';
import store from 'store/store';
import AccountScreen from 'containers/AccountScreen';
import ScoreDisplay from 'components/ScoreDisplay';
import Loader from 'components/Loader';
import FirestoreScoreController from 'components/FirestoreScoreController';

const App = () => (
  <Provider store={store}>
    <FirestoreScoreController />
    <Loader />
    <ScoreDisplay />
    <AccountScreen />
    <Game />
  </Provider>
);

export default App;
