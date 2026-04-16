import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import Tags from './Tags';
import axios from 'axios';

describe('Tags_01', () => {
  const server = setupServer(
    http.get('http://localhost:3004/tags', () => {
      return HttpResponse.json([{ id: '1', name: 'bar' }]);
    }),
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('renders tags with msw', async () => {
    render(<Tags />);

    const tags = await screen.findAllByTestId('tag');

    expect(tags).toHaveLength(1);
    expect(tags[0]).toHaveTextContent('bar');
  });
  it('renders tags with spyOn', async () => {
    const mockResponse = {
      data: [
        { id: '1', name: 'bar' },
        { id: '2', name: 'foo' },
      ],
    };
    vi.spyOn(axios, 'get').mockResolvedValue(mockResponse);

    render(<Tags />);

    const tags = await screen.findAllByTestId('tag');

    expect(tags).toHaveLength(2);
    expect(tags[0]).toHaveTextContent('bar');
    expect(tags[1]).toHaveTextContent('foo');
  });
});
