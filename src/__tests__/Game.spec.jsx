/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Game from 'containers/Game';
import { render, cleanup, act } from '@testing-library/react';
import { incrementScore, decrementScore } from 'actions/scoreActions';
import KeyboardHandler from 'components/KeyboardHandler';
import { fireEvent, createEvent } from '@testing-library/dom';

jest.mock('components/KeyboardHandler');

jest.mock('containers/Folk', () => {
  const Folk = ({ show }) => (<p>{show}</p>);
  return Folk;
});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

const mockStoreWithLoadingReducer = (loadingReducer) => useSelector.mockImplementation(
  (selector) => selector({
    scoreReducer: 0,
    loadingReducer,
  }),
);

const wordObj = { word: 'a' };
const arrJson = Array(100).fill(wordObj);
const promise = Promise.resolve({
  json: () => Promise.resolve(arrJson),
});
global.fetch = jest.fn(() => promise);

describe('<Game /> loading', () => {
  beforeEach(() => {
    KeyboardHandler.mockImplementation(({ isActive }) => (
      <p className="isActive">{isActive.toString()}</p>
    ));
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it(' should not be ready on loadedWord = 0', async () => {
    const loadingReducer = {
      loadedWord: 0,
      loadedModels: 100,
    };
    mockStoreWithLoadingReducer(loadingReducer);
    let component;
    await act(async () => { component = render(<Game />); });
    expect(component.baseElement.querySelector('.isActive').innerHTML).toContain('false');
  });

  it(' should not be ready on loadedModels = 0', async () => {
    const loadingReducer = {
      loadedWord: 100,
      loadedModels: 0,
    };
    mockStoreWithLoadingReducer(loadingReducer);
    let component;
    await act(async () => { component = render(<Game />); });
    expect(component.baseElement.querySelector('.isActive').innerHTML).toContain('false');
  });

  it(' should be ready on everything loaded', async () => {
    const loadingReducer = {
      loadedWord: 100,
      loadedModels: 100,
    };
    mockStoreWithLoadingReducer(loadingReducer);
    let component;
    await act(async () => { component = render(<Game />); });
    expect(component.baseElement.querySelector('.isActive').innerHTML).toContain('true');
  });
});

describe('<Game /> store connection', () => {
  beforeEach(() => {
    const loadingReducer = {
      loadedWord: 100,
      loadedModels: 100,
    };
    mockStoreWithLoadingReducer(loadingReducer);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it(' should increment score on correct keyword', async () => {
    KeyboardHandler.mockImplementation(({ isActive, onPressed }) => {
      useEffect(() => onPressed('A'), []);
      return <div>{isActive.toString()}</div>;
    });
    await act(async () => {
      render(<Game />);
    });
    expect(mockDispatch).toHaveBeenCalledWith(incrementScore());
  });

  it(' should decrement score on not correct keyword', async () => {
    KeyboardHandler.mockImplementation(({ onPressed }) => (
      <input className="input" onChange={({ target }) => onPressed(target.value)} />
    ));
    const badChars = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
    let component;
    await act(async () => {
      component = render(<Game />);
    });
    const input = component.container.querySelector('.input');
    badChars.forEach((el) => act(() => {
      const event = createEvent.input(input, { target: { value: el } });
      fireEvent(input, event);
    }));
    expect(mockDispatch).toHaveBeenCalledWith(decrementScore());
  });
});
