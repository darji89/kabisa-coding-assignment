import { fireEvent } from '@testing-library/react';
import { renderWithWrapper } from '../../../setupTests';
import { POPULAR_QUOTES_IDS } from '../popularQuotes.const';
import { PopularQuotes } from '../PopularQuotes';
import * as hooks from '../useFetchPopularQuotes';

const hookSpy = jest.spyOn(hooks, 'useFetchPopularQuotes');
const exampleData = [
  {
    author: 'test Autor 1',
    id: 1,
    quote: 'Test quote 1',
    permalink: 'http://example.com/1',
  },
  {
    author: 'test Autor 2',
    id: 2,
    quote: 'Test quote 2',
    permalink: 'http://example.com/2',
  },
];
const mockRefetch = jest.fn();
const baseHookReturn = {
  isLoading: true,
  isSuccess: false,
  error: null,
  data: undefined,
  refetch: mockRefetch,
};

describe('<PopularQuotes />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should show loading state', () => {
    hookSpy.mockReturnValue(baseHookReturn);
    const { getByTestId } = renderWithWrapper(<PopularQuotes />);

    expect(getByTestId(POPULAR_QUOTES_IDS.loadingStatus)).toBeTruthy();
  });

  it('should show error state', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      error: new Error(),
    });
    const { getByTestId } = renderWithWrapper(<PopularQuotes />);

    expect(getByTestId(POPULAR_QUOTES_IDS.errorStatus)).toBeTruthy();
  });

  it('should show no data state', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      data: undefined,
    });
    const { getByTestId } = renderWithWrapper(<PopularQuotes />);

    expect(getByTestId(POPULAR_QUOTES_IDS.noDataStatus)).toBeTruthy();
  });

  it('should show all popular quotes', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      data: exampleData,
    });
    const { getByTestId, debug } = renderWithWrapper(<PopularQuotes />);

    expect(getByTestId(POPULAR_QUOTES_IDS.quotesContainer)).toBeTruthy();
    expect(getByTestId(POPULAR_QUOTES_IDS.quotesContainer).innerHTML).toContain(
      exampleData[0].quote
    );
    expect(getByTestId(POPULAR_QUOTES_IDS.quotesContainer).innerHTML).toContain(
      exampleData[1].quote
    );
  });
});
