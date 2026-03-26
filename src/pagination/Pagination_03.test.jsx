import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination';

import * as utils from '../utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

vi.mock('../utils.js', () => {
  return {
    range: () => [1, 2, 3, 4],
  };
});

describe('Pagination_03', () => {
  it('render Pagination', () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);

    const pageContainers = screen.getAllByTestId('page-container');

    expect(pageContainers).toHaveLength(4);
    expect(pageContainers[0]).toHaveTextContent(1);
  });

  it('check if selectPage have been called', async () => {
    const user = userEvent.setup();
    const handleSelectPage = vi.fn();
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={handleSelectPage}
      />,
    );

    const pageContainers = screen.getAllByTestId('page-container');

    await user.click(pageContainers[0]);

    expect(handleSelectPage).toHaveBeenCalledOnce();
    expect(handleSelectPage).toHaveBeenCalledWith(1);
  });

  it('spies on utils', () => {
    vi.spyOn(utils, 'range');
    render(<Pagination total={50} limit={10} currentPage={1} />);

    expect(utils.range).toHaveBeenCalled();
    expect(utils.range).toHaveBeenCalledWith(1, 6);
  });
});
