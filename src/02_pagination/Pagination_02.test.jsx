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
  it('render correct pagination', () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);

    const pageContainer = screen.getAllByTestId('page-container');

    expect(pageContainer).toHaveLength(4);
    expect(pageContainer[0]).toHaveTextContent('1');
  });

  it('should emit clicked page', async () => {
    const mockClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={mockClick}
      />,
    );

    const pageContainer = screen.getAllByTestId('page-container');

    await user.click(pageContainer[0]);

    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(mockClick).toHaveBeenCalledWith(1);
  });

  it('spies on utils', async () => {
    vi.spyOn(utils, 'range');
    render(<Pagination total={50} limit={10} currentPage={1} />);

    expect(utils.range).toHaveBeenCalledWith(1, 6);
  });
});
