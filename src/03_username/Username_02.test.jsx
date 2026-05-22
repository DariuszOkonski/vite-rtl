import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Username from './Username';
import userEvent from '@testing-library/user-event';

describe('Username_03', () => {
  it('render default component', () => {
    render(<Username />);

    const userName = screen.getByTestId('username');

    expect(userName).toHaveTextContent('');
  });

  it('render component with username changed by button', async () => {
    const user = userEvent.setup();
    render(<Username />);

    const username = screen.getByTestId('username');
    const button = screen.getByTestId('button');

    await user.click(button);

    expect(username).toHaveTextContent('bar');
  });

  it('render component with username change by input', async () => {
    const user = userEvent.setup();
    render(<Username />);

    const username = screen.getByTestId('username');
    const usernameInput = screen.getByTestId('usernameInput');

    await user.type(usernameInput, 'bar');

    expect(username).toHaveTextContent('bar');
  });
});
