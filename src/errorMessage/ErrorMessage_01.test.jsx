import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders default error state', () => {
    render(<ErrorMessage />);

    expect(screen.getByTestId('message-container')).toHaveTextContent(
      'Something went wrong',
    );
  });

  it('renders custom error state', () => {
    render(<ErrorMessage message='404 error' />);

    const messageContainer = screen.getByTestId('message-container');
    expect(messageContainer).toHaveTextContent('404 error');
  });
});
