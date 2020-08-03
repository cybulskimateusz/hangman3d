import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
  const { loadedWord, loadedModels } = useSelector(({ loadingReducer }) => loadingReducer);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentProgress = (loadedModels + loadedWord) / 2;
    setProgress(currentProgress);
  }, [loadedWord, loadedModels]);

  return progress < 100 && <div className="loader">{progress}</div>;
};

export default Loader;
