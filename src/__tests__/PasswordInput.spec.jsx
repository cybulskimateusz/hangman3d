import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, cleanup } from '@testing-library/react';
import { fireEvent, createEvent } from '@testing-library/dom';

import { authState } from 'reducers/authReducer';
import PasswordInput from 'components/PasswordInput';

const mockStore = configureStore([]);
const basicStore = mockStore({ authReducer: authState });

describe('<PasswordInput /> ', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => ({ useSelector: jest.fn() }));
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should has class error on password shorter than 8', () => {
    const { container } = render(
      <Provider store={basicStore}>
        <PasswordInput onChange={() => {}} />
      </Provider>,
    );
    const input = container.querySelector('input');
    const event = createEvent.change(input, { target: { value: '123' } });
    fireEvent(input, event);
    expect(input.classList).toContain('login_input--error');
  });

  it('should has no class error on password longer than 8', () => {
    const { container } = render(
      <Provider store={basicStore}>
        <PasswordInput onChange={() => {}} />
      </Provider>,
    );
    const input = container.querySelector('input');
    const event = createEvent.change(input, { target: { value: '12345678' } });
    fireEvent(input, event);
    expect(input.classList).not.toContain('login_input--error');
  });
});
