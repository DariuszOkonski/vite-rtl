import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage_03', () => {
  it('renders without props', () => {
    render(<ErrorMessage />);
    const errorMessage = screen.getByTestId('message-container');
    expect(errorMessage).toHaveTextContent('Something went wrong');
  });

  it('renders with props', () => {
    render(<ErrorMessage message='404 Error' />);
    const errorMessage = screen.getByTestId('message-container');
    expect(errorMessage).toHaveTextContent('404 Error');
  });
});
