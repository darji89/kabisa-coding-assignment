import { UseQueryResult } from 'react-query';

export interface Quote {
  author: string;
  id: number;
  quote: string;
  permalink: string;
}

export interface UseFetchResponse<T extends {}>
  extends Pick<
    UseQueryResult<T, Error>,
    'data' | 'error' | 'refetch' | 'isLoading' | 'isSuccess'
  > {}
