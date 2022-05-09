import { renderHook } from '@testing-library/react';
import { useInterval } from '../helpers';

const mockedCallback = jest.fn();

describe('useInterval', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should not call callback if delay is null', () => {
    const { result } = renderHook(() => useInterval(mockedCallback, undefined));

    expect(mockedCallback).not.toHaveBeenCalled();
  });

  it('should call callback with an specific interval', async () => {
    const DELAY = 250;
    renderHook(() => useInterval(mockedCallback, DELAY));

    await new Promise((r) => setTimeout(r, DELAY));
    expect(mockedCallback).toHaveBeenCalledTimes(1);
    await new Promise((r) => setTimeout(r, DELAY));
    expect(mockedCallback).toHaveBeenCalledTimes(2);
    await new Promise((r) => setTimeout(r, DELAY));
    expect(mockedCallback).toHaveBeenCalledTimes(3);
  });

  it('should should stop after delay is set back to null', async () => {
    let DELAY: number | undefined = 250;
    const { result, rerender } = renderHook(() =>
      useInterval(mockedCallback, DELAY)
    );

    await new Promise((r) => setTimeout(r, DELAY));
    expect(mockedCallback).toHaveBeenCalledTimes(1);
    await new Promise((r) => setTimeout(r, DELAY));
    expect(mockedCallback).toHaveBeenCalledTimes(2);
    DELAY = undefined;
    rerender();
    await new Promise((r) => setTimeout(r, DELAY));
    expect(mockedCallback).toHaveBeenCalledTimes(2);
  });
});
