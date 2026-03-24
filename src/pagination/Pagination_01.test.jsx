import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders correct pagination', () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);
  });
});
