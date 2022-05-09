import React, { FC } from 'react';
import { useFetchPopularQuotes } from './useFetchPopularQuotes';
import styled from 'styled-components';
import { Quote } from '../../components/quote/Quote';
import { POPULAR_QUOTES_IDS } from './popularQuotes.const';

const StyledTitle = styled.h2`
  color: #4d4d4d;
  flex: 1;
  font-size: 22px;
  letter-spacing: 4px;
  font-weight: 800;
  text-align: center;
`;

const StyledPopularRoutes = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;

export const PopularQuotes: FC = () => {
  const { isLoading, error, data } = useFetchPopularQuotes();

  function renderContent() {
    if (isLoading) {
      return <StyledTitle data-testid='loader'>Loading...</StyledTitle>;
    }

    if (error) {
      return <StyledTitle data-testid='error'>Error...</StyledTitle>;
    }

    if (!data) {
      return (
        <StyledTitle data-testid='noData'>
          Guess there's really nothing to say...
        </StyledTitle>
      );
    }

    return data.map(({ author, id, permalink, quote }) => (
      <Quote author={author} key={id} link={permalink} text={quote} />
    ));
  }

  return (
    <StyledPopularRoutes data-testid={POPULAR_QUOTES_IDS.rootContainer}>
      {renderContent()}
    </StyledPopularRoutes>
  );
};
