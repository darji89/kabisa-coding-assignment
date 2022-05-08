import React, { FC } from 'react';
import styled from 'styled-components';
import { useFetchRadomQuote } from './useFetchRadomQuote';
import { Quote } from '../../components/quote/Quotes';

const StyledRandomQuotes = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 960px;
`;

const StyledTitle = styled.h2`
  color: #4d4d4d;
  flex: 1;
  font-size: 22px;
  font-weight: 800;
  text-align: center;
`;

export const RandomQuotes: FC = () => {
  const { isLoading, error, data, refetch } = useFetchRadomQuote();

  function handleRefetch(): void {
    refetch();
  }

  if (isLoading) {
    return <h1 data-testid='loader'>Loading...</h1>;
  }

  if (error) {
    return <h1 data-testid='error'>Error...</h1>;
  }

  if (!data) {
    return <h1 data-testid='noData'>Guess there's really nothing to say...</h1>;
  }

  return (
    <StyledRandomQuotes>
      <StyledTitle>Random</StyledTitle>
      <Quote author={data.author} text={data.quote} />

      <button onClick={handleRefetch}>refetch</button>
    </StyledRandomQuotes>
  );
};
