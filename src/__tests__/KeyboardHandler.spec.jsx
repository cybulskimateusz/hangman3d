import React from 'react';
import KeyboardHandler from 'components/KeyboardHandler';
import { render, cleanup } from '@testing-library/react';

let currKey;
const testFunc = (key) => { currKey = key; };

describe('<KeyboardHandler />', () => {
  afterEach(() => {
    cleanup();
    currKey = null;
  });
  it(' should work if correct key', () => {
    render(<KeyboardHandler onPressed={testFunc} isActive />);
    const pressA = new KeyboardEvent('keydown', { key: 'A' });
    window.dispatchEvent(pressA);
    expect(currKey).toEqual('A');
  });
  it(' should not work if uncorrect key', () => {
    render(<KeyboardHandler onPressed={testFunc} isActive />);
    const pressA = new KeyboardEvent('keydown', { key: '|' });
    window.dispatchEvent(pressA);
    expect(currKey).toEqual(null);
  });
  it(' should not work if isActive false', () => {
    render(<KeyboardHandler onPressed={testFunc} isActive={false} />);
    const pressA = new KeyboardEvent('keydown', { key: 'A' });
    window.dispatchEvent(pressA);
    expect(currKey).toEqual(null);
  });
});
