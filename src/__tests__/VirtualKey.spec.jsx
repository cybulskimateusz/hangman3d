import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { fireEvent, createEvent } from '@testing-library/dom';
import VirtualKey from 'components/VirtualKey';

window.dispatchEvent = jest.fn();

describe('<VirtualKey />', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it(' should dispatch keydown on click', () => {
    const { container } = render(<VirtualKey char="A" />);
    const key = container.querySelector('.virtual_key');
    const event = createEvent.click(key);
    fireEvent(key, event);
    expect(window.dispatchEvent).toHaveBeenCalledWith(new KeyboardEvent('keydown', { key: 'A' }));
  });

  it(' should return button', () => {
    const { container } = render(<VirtualKey char="A" />);
    expect(container.firstChild.className).toContain('virtual_key');
  });
});
