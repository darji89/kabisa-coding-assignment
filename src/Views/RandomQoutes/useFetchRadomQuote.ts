import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

interface UseFetchRadonQuote
  extends Pick<
    UseQueryResult<RandomQuotesQueryResponse, Error>,
    'data' | 'error' | 'refetch' | 'isLoading' | 'isSuccess'
  > {}

interface RandomQuotesQueryResponse {
  author: string;
  id: number;
  quote: string;
  permalink: string;
}

export const useFetchRadomQuote = (): UseFetchRadonQuote => {
  const { isLoading, isSuccess, error, data, refetch } = useQuery<
    RandomQuotesQueryResponse,
    Error
  >('randomQuotes', async () => {
    const { data: response } = await axios.get<RandomQuotesQueryResponse>(
      'http://quotes.stormconsultancy.co.uk/random.json'
    );
    return response;
  });

  return {
    isLoading,
    isSuccess,
    error,
    data,
    refetch,
  };
};
