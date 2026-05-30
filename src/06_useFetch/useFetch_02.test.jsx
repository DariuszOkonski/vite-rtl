import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import useFetch from './useFetch';
import axios from 'axios';

describe('useFetch_02', () => {
  it('should render initial value', () => {
    const { result } = renderHook(() => useFetch('/todos'));

    const [{ response, isLoading, error }, doFetch] = result.current;

    expect(response).toEqual(null);
    expect(isLoading).toEqual(false);
    expect(error).toEqual(null);
    expect(doFetch).toBeDefined();
  });

  it('should render success values after fetch', async () => {
    const mockedResponse = {
      data: [{ id: '1', text: 'foo', isCompleted: false }],
    };
    vi.spyOn(axios, 'request').mockResolvedValue(mockedResponse);

    const { result } = renderHook(() => useFetch('/todos'));

    await act(() => {
      const doFetch = result.current[1];
      doFetch();
    });

    const [{ response, isLoading, error }] = result.current;

    expect(response).toEqual(mockedResponse.data);
    expect(isLoading).toEqual(false);
    expect(error).toEqual(null);
  });

  it('should render error values after fetch', async () => {
    const mockedValue = {
      response: { data: 'Server Error' },
    };
    vi.spyOn(axios, 'request').mockRejectedValue(mockedValue);

    const { result } = renderHook(() => useFetch('/todos'));

    await act(() => {
      const doFetch = result.current[1];
      doFetch();
    });

    const [{ response, isLoading, error }] = result.current;

    expect(response).toEqual(null);
    expect(isLoading).toEqual(false);
    expect(error).toEqual('Server Error');
  });
});
