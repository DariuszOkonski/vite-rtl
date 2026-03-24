import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage_02', () => {
  it('should render component without provided message', () => {
    render(<ErrorMessage />);

    const message = screen.getByTestId('message-container');

    expect(message).toHaveTextContent('Something went wrong');
  });

  it('should render component with provided message', () => {
    render(<ErrorMessage message='Some error showed up' />);

    const message = screen.getByTestId('message-container');

    expect(message).toHaveTextContent('Some error showed up');
  });
});
