import axios from 'axios';
import { useQuery } from 'react-query';
import { BASE_URL, END_POINTS } from '../../utils/constants';
import { Quote, UseFetchResponse } from '../../utils/types';

type PopularQuotesQueryResponse = Quote[];

export const useFetchPopularQuotes =
  (): UseFetchResponse<PopularQuotesQueryResponse> => {
    const { isLoading, isSuccess, error, data, refetch } = useQuery<
      PopularQuotesQueryResponse,
      Error
    >('popularQuotes', async () => {
      const { data: response } = await axios.get<PopularQuotesQueryResponse>(
        `${BASE_URL}${END_POINTS.popular}`
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
