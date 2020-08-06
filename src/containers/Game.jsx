import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchWord from 'utils/fetchWord';

import { incrementScore, decrementScore } from 'actions/scoreActions';
import { setLoadedWord } from 'actions/appActions';
import KeyboardHandler from 'components/KeyboardHandler';
import GameOverScreen from 'containers/GameOverScreen';
import Folk from 'containers/Folk';
import ClueDisplay from 'containers/ClueDisplay';
import MissedDisplay from 'containers/MissedDisplay';
import VirtualKeyboard from 'containers/VirtualKeyboard';

const Game = () => {
  const { loadedWord, loadedModels, authScreenActive } = useSelector(
    ({ appReducer }) => appReducer,
  );
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
      <KeyboardHandler onPressed={setChar} isActive={!authScreenActive && !gameOver && isReady} />
      <Folk show={missed.size} />
      <ClueDisplay clue={clue} exposed={Array.from(exposed)} />
      <VirtualKeyboard ignore={[...Array.from(missed), ...Array.from(exposed)]} />
      <MissedDisplay missed={Array.from(missed)} />
    </>
  );
};
export default memo(Game);
