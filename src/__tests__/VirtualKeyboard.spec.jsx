import React from 'react';
import { render } from '@testing-library/react';
import VirtualKeyboard from 'containers/VirtualKeyboard';

describe('<VirtualKeyboard />', () => {
  const { container } = render(<VirtualKeyboard ignore={['Q']} />);
  const virtualKey = container.querySelectorAll('.virtual_key');

  it(' should not display ignored chars', () => {
    virtualKey.forEach((el) => expect(el.innerHTML).not.toEqual('Q'));
  });
});
