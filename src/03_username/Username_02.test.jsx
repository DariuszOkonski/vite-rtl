import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Username from './Username';
import userEvent from '@testing-library/user-event';

describe('Username_02', () => {
  it('renders component with empty state', () => {
    render(<Username />);

    const username = screen.getByTestId('username');

    expect(username).toHaveTextContent('');
  });

  it('emits click event', async () => {
    const user = userEvent.setup();
    render(<Username />);

    const button = screen.getByTestId('button');
    const username = screen.getByTestId('username');

    await user.click(button);

    expect(username).toHaveTextContent('bar');
  });

  it('emits type event', async () => {
    const user = userEvent.setup();
    render(<Username />);

    const username = screen.getByTestId('username');
    const usernameInput = screen.getByTestId('usernameInput');

    await user.type(usernameInput, 'foo');

    expect(username).toHaveTextContent('foo');
  });
});
