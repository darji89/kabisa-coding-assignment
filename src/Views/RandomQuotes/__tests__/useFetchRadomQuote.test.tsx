import { waitFor } from '@testing-library/react';
import { useFetchRadomQuote } from '../useFetchRadomQuote';
import { renderHookWithWrapper } from '../../../setupTests';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const testResponse = {
  data: {
    author: 'Sam Ewing',
    id: 33,
    quote: 'Computers are like bikinis. They save people a lot of guesswork.',
    permalink: 'http://quotes.stormconsultancy.co.uk/quotes/33',
  },
};

describe('useFetchRadomQuote', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Should handle a bad response', async () => {
    mockedAxios.get.mockImplementation(() => Promise.reject({}));
    const { result } = renderHookWithWrapper(() => useFetchRadomQuote());

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.isSuccess).toBeFalsy();
      expect(result.current.data).toBeUndefined();
    });
  });

  it('Should return a correct response', async () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve(testResponse));
    const { result } = renderHookWithWrapper(() => useFetchRadomQuote());

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.isSuccess).toBeTruthy();

      expect(result.current.data!.id).toBeDefined();
      expect(Number.isNaN(result.current.data!.id)).toBeFalsy();
      expect(result.current.data!.author).toBeDefined();
      expect(typeof result.current.data!.author).toBe('string');
      expect(result.current.data!.permalink).toBeDefined();
      expect(typeof result.current.data!.permalink).toBe('string');
      expect(result.current.data!.permalink).toContain('http://');
    });
  });
});
