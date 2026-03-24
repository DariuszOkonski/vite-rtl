import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination_02', () => {
  it('render component with provided props', () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);

    const pageContainer = screen.getAllByTestId('page-container');

    expect(pageContainer).toHaveLength(5);
    expect(pageContainer[0]).toHaveTextContent(1);
  });

  it('check if selectPage was called', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={handleClick}
      />,
    );

    const pageContainer = screen.getAllByTestId('page-container');
    await user.click(pageContainer[0]);

    expect(handleClick).toHaveBeenCalledOnce();
    expect(handleClick).toHaveBeenCalledWith(1);
  });
});
