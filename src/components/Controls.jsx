import React, { useRef } from 'react';
import { useThree, extend, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => orbitRef.current.update());

  return (
    <orbitControls
      ref={orbitRef}
      args={[camera, gl.domElement]}
      autoRotate
    />
  );
};

export default Controls;
