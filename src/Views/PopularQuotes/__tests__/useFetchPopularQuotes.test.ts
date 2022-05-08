import { waitFor } from '@testing-library/react';
import { useFetchPopularQuotes } from '../useFetchPopularQuotes';
import { renderHookWithWrapper } from '../../../setupTests';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const testResponse = {
  data: [
    {
      author: 'Robert Sewell',
      id: 41,
      quote:
        'If Java had true garbage collection, most programs would delete themselves upon execution.',
      permalink: 'http://quotes.stormconsultancy.co.uk/quotes/41',
    },
  ],
};

describe('useFetchRadomQuote', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Should handle a bad response', async () => {
    mockedAxios.get.mockImplementation(() => Promise.reject({}));
    const { result } = renderHookWithWrapper(() => useFetchPopularQuotes());

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.isSuccess).toBeFalsy();
      expect(result.current.data).toBeUndefined();
    });
  });

  it('Should return a correct response', async () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve(testResponse));
    const { result } = renderHookWithWrapper(() => useFetchPopularQuotes());

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.isSuccess).toBeTruthy();

      expect(Array.isArray(result.current.data)).toBeTruthy();

      expect(result.current.data![0].id).toBeDefined();
      expect(Number.isNaN(result.current.data![0].id)).toBeFalsy();
      expect(result.current.data![0].author).toBeDefined();
      expect(typeof result.current.data![0].author).toBe('string');
      expect(result.current.data![0].permalink).toBeDefined();
      expect(typeof result.current.data![0].permalink).toBe('string');
      expect(result.current.data![0].permalink).toContain('http://');
    });
  });
});
