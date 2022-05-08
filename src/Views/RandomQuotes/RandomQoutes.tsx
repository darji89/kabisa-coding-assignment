import React, { FC } from 'react';
import styled from 'styled-components';
import { useFetchRadomQuote } from './useFetchRadomQuote';
import { Quote } from '../../components/quote/Quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faShare } from '@fortawesome/free-solid-svg-icons';

const StyledRandomQuotes = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 960px;
`;

const StyledTitle = styled.h2`
  color: #4d4d4d;
  flex: 1;
  font-size: 22px;
  letter-spacing: 4px;
  font-weight: 800;
  text-align: center;
`;

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
`;

const StyledIcon = styled(FontAwesomeIcon).attrs({
  color: '#4d4d4d',
})`
  cursor: pointer;
  margin: 0 12px;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
`;

const StyledRefetchIcon = styled(StyledIcon).attrs({
  icon: faRotate,
})``;

const StyledRPopularIcon = styled(StyledIcon).attrs({
  icon: faShare,
})``;

export const RandomQuotes: FC = () => {
  const { isLoading, error, data, refetch } = useFetchRadomQuote();

  function handleRefetch(): void {
    refetch();
  }

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

  return (
    <StyledRandomQuotes>
      <Quote author={data.author} text={data.quote} />
      <StyledActionContainer>
        <StyledRefetchIcon onClick={handleRefetch} />
        <StyledRPopularIcon />
      </StyledActionContainer>
    </StyledRandomQuotes>
  );
};
