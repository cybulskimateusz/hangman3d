/* eslint-disable no-param-reassign */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setLoadedModels } from 'actions/loadingActions';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import { Canvas } from 'react-three-fiber';
import Scene from 'components/Scene';

import 'styles/Canvas.scss';

const Folk = ({ show }) => {
  const dispatch = useDispatch();
  const dispatchProgress = (progress) => dispatch(setLoadedModels(progress));

  return (
    <Canvas
      camera={{ position: [0, 600, 1000], near: 0.1, far: 5000 }}
      onCreated={({ gl, scene }) => {
        gl.setClearAlpha = true;
        scene.background = new THREE.Color(0x000000);
      }}
    >
      <Scene show={show} progressCallback={dispatchProgress} />
    </Canvas>
  );
};

Folk.propTypes = {
  show: PropTypes.number,
};

Folk.defaultProps = {
  show: 0,
};

export default memo(Folk);
