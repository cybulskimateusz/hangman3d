import React from 'react';
import uuid from 'react-uuid';
import VirtualKey from 'components/VirtualKey';

const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', ' '];

const VirtualKeyboard = ({ ignore }) => chars.map((char) => !ignore.includes(char) && (
  <VirtualKey
    char={char}
    key={uuid()}
  />
));

export default VirtualKeyboard;
