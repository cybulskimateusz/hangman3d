import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import 'styles/Loader.scss';

const SpanCircle = () => (
  <>
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
    <span className="loader__inner" />
  </>
);

const Loader = () => {
  const { loadedWord, loadedModels } = useSelector(({ appReducer }) => appReducer);

  return (loadedModels + loadedWord) < 200 && (
    <div className="loader__outter">
      <div className="loader">
        <div className="current_progress">{Math.floor((loadedModels + loadedWord) / 2)}</div>
        <SpanCircle />
      </div>
    </div>
  );
};

export default memo(Loader);
