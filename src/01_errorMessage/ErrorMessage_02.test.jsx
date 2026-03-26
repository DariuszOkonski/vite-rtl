import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage_02', () => {
  it('should render without providing a message', () => {
    render(<ErrorMessage />);

    const message = screen.getByTestId('message-container');

    expect(message).toHaveTextContent('Something went wrong');
  });

  it('should render with providing a message', () => {
    render(<ErrorMessage message='Error showed up' />);

    const message = screen.getByTestId('message-container');

    expect(message).toHaveTextContent('Error showed up');
  });
});
