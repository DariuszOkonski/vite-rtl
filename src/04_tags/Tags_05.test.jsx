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

describe('Tags_05', () => {
  const server = setupServer(
    http.get('http://localhost:3004/tags', () => {
      return HttpResponse.json([
        { id: '1', name: 'bar' },
        { id: '2', name: 'foo' },
        { id: '3', name: 'buzz' },
      ]);
    }),
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('render Tags', async () => {
    render(<Tags />);

    const tags = await screen.findAllByTestId('tag');

    expect(tags).toHaveLength(3);
    expect(tags[0]).toHaveTextContent('bar');
    expect(tags[1]).toHaveTextContent('foo');
    expect(tags[2]).toHaveTextContent('buzz');
  });

  it('render with using spyOn', async () => {
    const mockedResponse = {
      data: [
        { id: '1', name: 'buzz' },
        { id: '2', name: 'bar' },
      ],
    };

    vi.spyOn(axios, 'get').mockResolvedValue(mockedResponse);

    render(<Tags />);

    const tags = await screen.findAllByTestId('tag');

    expect(tags).toHaveLength(2);
    expect(tags[0]).toHaveTextContent('buzz');
  });
});
