import { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { firestore } from 'fire';
import { setScore } from 'actions/scoreActions';

const collection = firestore.collection('score');

const getScore = async (uid) => {
  const doc = await collection.doc(uid).get();
  const { score } = doc.data();
  return parseInt(score, 10);
};
const sendScore = async (uid, score) => collection.doc(uid).set({ score });
const clearScore = async (uid) => collection.doc(uid).delete();

const FirestoreScoreController = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ authReducer }) => authReducer);
  const score = useSelector(({ scoreReducer }) => scoreReducer);

  const dispatchFirestoreScore = async (uid) => {
    try {
      const storeFromDB = await getScore(uid);
      dispatch(setScore(storeFromDB));
      return storeFromDB;
    } catch (err) {
      dispatch(setScore(0));
      return true;
    }
  };

  useEffect(() => {
    const { uid } = user;
    if (uid) dispatchFirestoreScore(uid);
    else dispatch(setScore(0));
  }, [user]);

  useEffect(() => {
    const { uid } = user;
    if (uid) sendScore(uid, score);
  }, [score]);

  return null;
};

export { getScore, sendScore, clearScore };
export default memo(FirestoreScoreController);
