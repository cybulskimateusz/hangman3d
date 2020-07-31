/* eslint-disable no-console */
import React from 'react';
import KeyboardHandler from 'components/KeyboardHandler';
import { render, cleanup } from '@testing-library/react';

let map;
const testFunc = (key) => { map = key; };

describe('<KeyboardHandler />', () => {
  afterEach(() => {
    cleanup();
    map = null;
  });
  it(' should work if correct key', () => {
    render(<KeyboardHandler onPressed={testFunc} isActive />);
    const pressA = new KeyboardEvent('keydown', { key: 'A' });
    window.dispatchEvent(pressA);
    expect(map).toEqual('A');
  });
  it(' should not work if uncorrect key', () => {
    render(<KeyboardHandler onPressed={testFunc} isActive />);
    const pressA = new KeyboardEvent('keydown', { key: '|' });
    window.dispatchEvent(pressA);
    expect(map).toEqual(null);
  });
  it(' should not work if isActive false', () => {
    render(<KeyboardHandler onPressed={testFunc} isActive={false} />);
    const pressA = new KeyboardEvent('keydown', { key: 'A' });
    window.dispatchEvent(pressA);
    expect(map).toEqual(null);
  });
});
