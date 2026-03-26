import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';
import * as utils from '../utils';

vi.mock('../utils.js', () => {
  return {
    range: () => [1, 2, 3, 4],
  };
});

describe('Pagination_02', () => {
  it('renders pagination without any props', () => {
    render(<Pagination />);

    const pageContainers = screen.getAllByTestId('page-container');

    expect(pageContainers).toHaveLength(4);
  });

  it('renders pagination with props', () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);

    const pageContainers = screen.getAllByTestId('page-container');

    expect(pageContainers.length).toBe(4);
    expect(pageContainers[0]).toHaveTextContent(1);
  });

  it('check click on selectPage', async () => {
    const user = userEvent.setup();
    const mockSelectPage = vi.fn();

    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={mockSelectPage}
      />,
    );

    const pageContainers = screen.getAllByTestId('page-container');

    await user.click(pageContainers[0]);

    expect(mockSelectPage).toHaveBeenCalledOnce();
    expect(mockSelectPage).toHaveBeenCalledWith(1);
  });

  it('spies on utils', () => {
    vi.spyOn(utils, 'range');

    render(<Pagination total={50} limit={10} currentPage={1} />);

    expect(utils.range).toHaveBeenCalledTimes(1);
    expect(utils.range).toHaveBeenCalledWith(1, 6);
  });
});
