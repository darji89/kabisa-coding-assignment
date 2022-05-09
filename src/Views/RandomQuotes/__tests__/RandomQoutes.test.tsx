import { fireEvent } from '@testing-library/react';
import { renderWithWrapper } from '../../../setupTests';
import { RandomQuotes, TIMER_DELAY } from '../RandomQoutes';
import { RANDOM_QUOTES_IDS } from '../randomQuotes.const';
import * as hooks from '../useFetchRadomQuote';

const hookSpy = jest.spyOn(hooks, 'useFetchRadomQuote');
const exampleData = {
  author: 'test Autor',
  id: 0,
  quote: 'Test quote',
  permalink: 'http://example.com',
};
const mockRefetch = jest.fn();
const baseHookReturn = {
  isLoading: true,
  isSuccess: false,
  error: null,
  data: undefined,
  refetch: mockRefetch,
};

describe('<RandomQoutes />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should show loading state', () => {
    hookSpy.mockReturnValue(baseHookReturn);
    const { getByTestId } = renderWithWrapper(<RandomQuotes />);

    expect(getByTestId(RANDOM_QUOTES_IDS.loadingStatus)).toBeTruthy();
  });

  it('should show error state', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      error: new Error(),
    });
    const { getByTestId } = renderWithWrapper(<RandomQuotes />);

    expect(getByTestId(RANDOM_QUOTES_IDS.errorStatus)).toBeTruthy();
  });

  it('should show error state', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      data: undefined,
    });
    const { getByTestId } = renderWithWrapper(<RandomQuotes />);

    expect(getByTestId(RANDOM_QUOTES_IDS.noDataStatus)).toBeTruthy();
  });

  it('should show random quote', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      data: exampleData,
    });
    const { getByTestId } = renderWithWrapper(<RandomQuotes />);

    expect(getByTestId('randomQuote')).toBeTruthy();
    expect(getByTestId('randomQuote').innerHTML).toBe('Test quote');
  });

  it('should refetech on button press', () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      data: exampleData,
    });
    const { getByTestId } = renderWithWrapper(<RandomQuotes />);

    const button = getByTestId(RANDOM_QUOTES_IDS.refetchButton);

    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(mockRefetch).toHaveBeenCalledTimes(1);
  });

  jest.setTimeout(30000);
  it('should start slideshow', async () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      data: exampleData,
    });
    const { getByTestId } = renderWithWrapper(<RandomQuotes />);

    const button = getByTestId(RANDOM_QUOTES_IDS.playPauseButton);

    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    await new Promise((r) => setTimeout(r, TIMER_DELAY));
    expect(mockRefetch).toHaveBeenCalledTimes(1);
    await new Promise((r) => setTimeout(r, TIMER_DELAY));
    expect(mockRefetch).toHaveBeenCalledTimes(2);
  });

  it('should stop slideshow', async () => {
    hookSpy.mockReturnValue({
      ...baseHookReturn,
      isLoading: false,
      data: exampleData,
    });
    const { getByTestId } = renderWithWrapper(<RandomQuotes />);

    const button = getByTestId(RANDOM_QUOTES_IDS.playPauseButton);

    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    await new Promise((r) => setTimeout(r, TIMER_DELAY / 2));

    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

    expect(mockRefetch).toHaveBeenCalledTimes(0);
  });
});
