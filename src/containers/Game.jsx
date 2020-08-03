import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchWord from 'utils/fetchWord';

import { incrementScore, decrementScore } from 'actions/scoreActions';
import { setLoadedWord } from 'actions/loadingActions';
import KeyboardHandler from 'components/KeyboardHandler';
import GameOverScreen from 'containers/GameOverScreen';

const Game = () => {
  const { loadedWord, loadedModels } = useSelector(({ loadingReducer }) => loadingReducer);
  const [isReady, setIsReady] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [char, setChar] = useState();
  const [clue, setClue] = useState();
  const [missed, setMissed] = useState(new Set());
  const [exposed, setExposed] = useState(new Set());
  const dispatch = useDispatch();

  const receiveClue = async () => {
    const word = await fetchWord();
    setClue(word.toUpperCase());
    dispatch(setLoadedWord(100));
  };

  const reset = () => {
    receiveClue();
    setMissed(new Set());
    setExposed(new Set());
    setChar();
    setGameOver(false);
    dispatch(setLoadedWord(0));
  };

  const charset = () => {
    const chars = clue.split('');
    const requiredChars = new Set(chars);
    return requiredChars;
  };

  const handleGameOver = () => {
    const isWon = charset().size === exposed.size;
    const isLost = missed.size >= 10;
    if (isLost) {
      dispatch(decrementScore());
      setGameOver(true);
    }
    if (isWon) {
      dispatch(incrementScore());
      setGameOver(true);
    }
  };

  useEffect(() => {
    receiveClue();
  }, []);

  useEffect(() => {
    if (loadedWord + loadedModels === 200) setIsReady(true);
    else setIsReady(false);
  }, [loadedWord, loadedModels]);

  useEffect(() => {
    if (clue) {
      if (clue.includes(char)) setExposed(new Set([...exposed.entries(), char].flat()));
      else if (!clue.includes(char)) setMissed(new Set([...missed.entries(), char].flat()));
    }
  }, [clue, char]);

  useEffect(() => {
    if (clue) handleGameOver();
  }, [exposed, missed]);

  return (
    <>
      <GameOverScreen isActive={gameOver} resetFunc={reset} />
      <KeyboardHandler onPressed={setChar} isActive={!gameOver && isReady} />
    </>
  );
};
export default Game;
