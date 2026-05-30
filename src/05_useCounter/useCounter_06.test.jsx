import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useCounter from './useCounter';

describe('useCounter_06', () => {
  it('should return initial value', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toEqual(0);
  });

  it('should return provided value', () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.count).toEqual(10);
  });

  it('should increase initial value', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(1);
  });

  it('should increase provide value', () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(11);
  });
});
