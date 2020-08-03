import React from 'react';
import { render } from '@testing-library/react';
import ClueDisplay from 'containers/ClueDisplay';

const { container } = render(<ClueDisplay clue="abcde" exposed={['a', 'b']} />);
const fields = container.querySelectorAll('.field');
describe('<ClueDisplay />', () => {
  it(' should display a b', () => {
    expect(fields[0].innerHTML).toContain('a');
    expect(fields[1].innerHTML).toContain('b');
  });
  it(' should not display c d e', () => {
    expect(fields[2].innerHTML).toContain('');
    expect(fields[3].innerHTML).toContain('');
    expect(fields[4].innerHTML).toContain('');
  });
});
