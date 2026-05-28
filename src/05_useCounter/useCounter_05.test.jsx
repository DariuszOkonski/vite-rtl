import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useCounter from './useCounter';

describe('useCounter_05', () => {
  it('should render with initial value', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toEqual(0);
  });

  it('should render with provided value', () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.count).toEqual(10);
  });

  it('should render and increment with initial value', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(1);
  });

  it('should render and increment with provided value', () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(11);
  });
});
