import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage_03', () => {
  it('renders with default message', () => {
    render(<ErrorMessage />);

    const messageContainer = screen.getByTestId('message-container');

    expect(messageContainer).toHaveTextContent('Something went wrong');
  });

  it('renders with custom message', () => {
    render(<ErrorMessage message='404 Error' />);

    const messageContainer = screen.getByTestId('message-container');

    expect(messageContainer).toHaveTextContent('404 Error');
  });
});
