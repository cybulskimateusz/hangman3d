import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, cleanup } from '@testing-library/react';
import { fireEvent, createEvent } from '@testing-library/dom';

import { authState } from 'reducers/authReducer';
import EmailInput from 'components/EmailInput';

const mockStore = configureStore([]);
const basicStore = mockStore({ authReducer: authState });

describe('<EmailInput /> ', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => ({ useSelector: jest.fn() }));
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should has class error on wrong email', () => {
    const { container } = render(
      <Provider store={basicStore}>
        <EmailInput onChange={() => {}} />
      </Provider>,
    );
    const input = container.querySelector('input');
    const event = createEvent.change(input, { target: { value: '123' } });
    fireEvent(input, event);
    expect(input.classList).toContain('login_input--error');
  });

  it('should has no class error on correct email', () => {
    const { container } = render(
      <Provider store={basicStore}>
        <EmailInput onChange={() => {}} />
      </Provider>,
    );
    const input = container.querySelector('input');
    const event = createEvent.change(input, { target: { value: 'abcd@abc.com' } });
    fireEvent(input, event);
    expect(input.classList).not.toContain('login_input--error');
  });
});
