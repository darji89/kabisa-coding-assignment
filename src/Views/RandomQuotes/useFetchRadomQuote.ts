import axios from 'axios';
import { useQuery } from 'react-query';
import { BASE_URL, END_POINTS } from '../../utils/constants';
import { Quote, UseFetchResponse } from '../../utils/types';

interface RandomQuotesQueryResponse extends Quote {}

export const useFetchRadomQuote =
  (): UseFetchResponse<RandomQuotesQueryResponse> => {
    const { isFetching, isLoading, isSuccess, error, data, refetch } = useQuery<
      Quote,
      Error
    >(
      'randomQuotes',
      async () => {
        const { data: response } = await axios.get<RandomQuotesQueryResponse>(
          `${BASE_URL}${END_POINTS.random}`
        );
        return response;
      },
      { refetchOnWindowFocus: false }
    );

    return {
      isLoading: isLoading || isFetching,
      isSuccess,
      error,
      data,
      refetch,
    };
  };
