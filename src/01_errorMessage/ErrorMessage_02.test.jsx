import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage 02', () => {
  it('should display default message', () => {
    render(<ErrorMessage />);

    const messageContainer = screen.getByTestId('message-container');

    expect(messageContainer).toHaveTextContent('Something went wrong');
  });

  it('should display provided message', () => {
    render(<ErrorMessage message='404 error' />);

    const messageContainer = screen.getByTestId('message-container');

    expect(messageContainer).toHaveTextContent('404 error');
  });
});
