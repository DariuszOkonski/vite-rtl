import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';
import * as utils from '../utils/utils';

vi.mock('../utils/utils.js', () => {
  return {
    range: () => [1, 2, 3],
  };
});

describe('Pagination_03', () => {
  it('renders default pagination', () => {
    render(<Pagination total={30} limit={10} currentPage={1} />);

    const pageContainers = screen.getAllByTestId('page-container');

    expect(pageContainers).toHaveLength(3);
    expect(pageContainers[0]).toHaveTextContent(1);
  });

  it('renders and call selectPage function', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Pagination
        total={30}
        limit={10}
        currentPage={1}
        selectPage={handleClick}
      />,
    );

    const firstPageContainer = screen.getAllByTestId('page-container')[0];

    await user.click(firstPageContainer);

    expect(handleClick).toHaveBeenCalledOnce();
    expect(handleClick).toHaveBeenCalledWith(1);
  });

  it('should spyOn range function', async () => {
    vi.spyOn(utils, 'range');
    render(<Pagination total={50} limit={10} currentPage={1} />);

    expect(utils.range).toHaveBeenCalledOnce();
    expect(utils.range).toHaveBeenCalledWith(1, 6);
  });
});
