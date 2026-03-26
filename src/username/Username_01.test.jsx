import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Username from './Username';
import userEvent from '@testing-library/user-event';

describe('Username_01', () => {
  it('render default empty text', () => {
    render(<Username />);

    const username = screen.getByTestId('username');

    expect(username).toHaveTextContent('');
  });

  it('renders changed username with button', async () => {
    const user = userEvent.setup();
    render(<Username />);

    const username = screen.getByTestId('username');
    const button = screen.getByTestId('button');

    await user.click(button);

    expect(username).toHaveTextContent('bar');
  });

  it('renders changed username with input', async () => {
    const user = userEvent.setup();
    render(<Username />);

    const username = screen.getByTestId('username');
    const input = screen.getByTestId('usernameInput');

    await user.type(input, 'foo');

    expect(username).toHaveTextContent('foo');
  });
});
