/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import PropType from 'prop-types';
import * as THREE from 'three';

const SceneSubject = ({
  object, loadingCallback, isVisible,
}) => {
  const subRef = useRef();
  const [model, setModel] = useState();

  const manager = () => {
    const lManager = new THREE.LoadingManager();
    lManager.onProgress = (url, loaded, total) => {
      const progress = (loaded / total) * 100;
      loadingCallback(progress);
    };
    lManager.onError = () => { throw new Error('Cannot load file'); };
    return lManager;
  };

  const show = () => {
    model.scene.traverse(({ material }) => {
      if (material) material.opacity = 1;
    });
  };

  const hide = () => {
    model.scene.traverse(({ material }) => {
      if (material) material.opacity = 0;
    });
  };

  useEffect(() => {
    if (model && isVisible) show();
    else if (model) hide();
  }, [isVisible, model]);

  useEffect(() => {
    const loadingManager = manager();
    const loader = new GLTFLoader(loadingManager);
    loader.load(object, (gltf) => {
      gltf.scene.traverse(({ material }) => {
        if (material) {
          material.transparent = true;
          material.opacity = 0;
        }
      });
      setModel(gltf);
    });
  }, []);

  return (
    model ? (
      <primitive
        object={model.scene}
        ref={subRef}
        position={[0, -500, 0]}
        rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
      />
    ) : null);
};

SceneSubject.propTypes = {
  object: PropType.string.isRequired,
  isVisible: PropType.bool,
  loadingCallback: PropType.func,
};

SceneSubject.defaultProps = {
  isVisible: false,
  loadingCallback: () => {},
};

export default SceneSubject;
