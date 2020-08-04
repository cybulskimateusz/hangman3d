import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import SceneSubject from 'components/SceneSubject';
import Controls from 'components/Controls';
import table from 'models/table.gltf';
import vBalk from 'models/balk_vertical.gltf';
import hBalk from 'models/balk_horizontal.gltf';
import line from 'models/line.gltf';
import head from 'models/head.gltf';
import corps from 'models/corps.gltf';
import rHand from 'models/hand_right.gltf';
import lHand from 'models/hand_left.gltf';
import rLeg from 'models/leg_right.gltf';
import lLeg from 'models/leg_left.gltf';

const Scene = ({ show, progressCallback }) => {
  const [tableProgress, setTableProgress] = useState(0);
  const [vBalkProgress, setVBalkProgress] = useState(0);
  const [hBalkProgress, setHBalkProgress] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [headProgress, setHeadProgress] = useState(0);
  const [corpsProgress, setCorpsProgress] = useState(0);
  const [rHandProgress, setRHandProgress] = useState(0);
  const [lHandProgress, setLHandProgress] = useState(0);
  const [rLegProgress, setRLegProgress] = useState(0);
  const [lLegProgress, setLLegProgress] = useState(0);

  useEffect(() => {
    const progress = tableProgress / 10
    + vBalkProgress / 10
    + hBalkProgress / 10
    + lineProgress / 10
    + headProgress / 10
    + corpsProgress / 10
    + rHandProgress / 10
    + lHandProgress / 10
    + rLegProgress / 10
    + lLegProgress / 10;
    progressCallback(progress);
  },
  [
    tableProgress,
    vBalkProgress,
    hBalkProgress,
    lineProgress,
    headProgress,
    corpsProgress,
    headProgress,
    rHandProgress,
    lHandProgress,
    rLegProgress,
    lLegProgress,
  ]);
  return (
    <>
      <Controls />
      <spotLight color="white" position={[100, 4000, 100]} intensity="10" castShadow />
      <ambientLight color="white" />
      <SceneSubject object={table} isVisible={show > 0} loadingCallback={setTableProgress} />
      <SceneSubject object={vBalk} isVisible={show > 1} loadingCallback={setVBalkProgress} />
      <SceneSubject object={hBalk} isVisible={show > 2} loadingCallback={setHBalkProgress} />
      <SceneSubject object={line} isVisible={show > 3} loadingCallback={setLineProgress} />
      <SceneSubject object={head} isVisible={show > 4} loadingCallback={setHeadProgress} />
      <SceneSubject object={corps} isVisible={show > 5} loadingCallback={setCorpsProgress} />
      <SceneSubject object={rHand} isVisible={show > 6} loadingCallback={setRHandProgress} />
      <SceneSubject object={lHand} isVisible={show > 7} loadingCallback={setLHandProgress} />
      <SceneSubject object={rLeg} isVisible={show > 8} loadingCallback={setRLegProgress} />
      <SceneSubject object={lLeg} isVisible={show > 9} loadingCallback={setLLegProgress} />
    </>
  );
};

Scene.propTypes = {
  show: PropTypes.number,
  progressCallback: PropTypes.func,
};

Scene.defaultProps = {
  show: 0,
  progressCallback: () => {},
};

export default memo(Scene);
