import React from 'react';
import { renderWithWrapper } from '../../../setupTests';
import { RandomQuotes } from '../RandomQoutes';
import * as hooks from '../useFetchRadomQuote';

const hookSpy = jest.spyOn(hooks, 'useFetchRadomQuote');
const baseHookReturn = {
  isLoading: true,
  isSuccess: false,
  error: null,
  data: undefined,
  refetch: jest.fn(),
};

describe('<RandomQoutes />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should show loading state', () => {
    hookSpy.mockReturnValue(baseHookReturn);
    const { getByTestId, debug } = renderWithWrapper(<RandomQuotes />);

    expect(getByTestId('loader')).toBeTruthy();
  });

  it('should show error state', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      error: new Error(),
    });
    const { getByTestId } = renderWithWrapper(<RandomQuotes />);

    expect(getByTestId('error')).toBeTruthy();
  });

  it('should show error state', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      data: undefined,
    });
    const { getByTestId } = renderWithWrapper(<RandomQuotes />);

    expect(getByTestId('noData')).toBeTruthy();
  });

  it('should show random quote', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      data: {
        author: 'test Autor',
        id: 0,
        quote: 'Test quote',
        permalink: 'http://example.com',
      },
    });
    const { getByTestId, container } = renderWithWrapper(<RandomQuotes />);

    expect(getByTestId('randomQuote')).toBeTruthy();
    expect(getByTestId('randomQuote').innerHTML).toBe('Test quote');
  });
});
