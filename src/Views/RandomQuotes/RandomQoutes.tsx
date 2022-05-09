import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useFetchRadomQuote } from './useFetchRadomQuote';
import { Quote } from '../../components/quote/Quote';
import {
  faRotate,
  faShare,
  faPlay,
  faPause,
  faSpinner,
  faExclamationTriangle,
  faHeartCrack,
} from '@fortawesome/free-solid-svg-icons';
import { useInterval } from '../../utils/helpers';
import { StatusIcon } from '../../components/statusIcon/StatusIcon';
import { StyledIcon } from '../../components/common/StyledComponent';
import { RANDOM_QUOTES_IDS } from './randomQuotes.const';

const TIMER_DELAY = 7500;

const StyledRandomQuotes = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 960px;
`;

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
`;

const StyledRefetchIcon = styled(StyledIcon).attrs({
  icon: faRotate,
})``;

const StyledPlayPauseIcon = styled(StyledIcon)``;

export const RandomQuotes: FC = () => {
  const [isPlaying, setIsplaying] = useState(false);
  const { isLoading, error, data, refetch } = useFetchRadomQuote();
  useInterval(refetch, isPlaying ? TIMER_DELAY : null);

  function handleRefetch(): void {
    setIsplaying(false);
    refetch();
  }

  const togglePlay = useCallback(() => {
    setIsplaying((value) => !value);
  }, []);

  function renderContent() {
    if (isLoading) {
      return (
        <StatusIcon testId='loader' pulse icon={faSpinner} text='Loading...' />
      );
    }

    if (error) {
      return (
        <StatusIcon
          testId='error'
          icon={faExclamationTriangle}
          text='Error...'
        />
      );
    }

    if (!data) {
      return (
        <StatusIcon
          testId='noData'
          icon={faHeartCrack}
          text="Guess there's really nothing to say..."
        />
      );
    }

    return (
      <>
        <Quote author={data.author} link={data.permalink} text={data.quote} />
        <StyledActionContainer>
          <StyledRefetchIcon onClick={handleRefetch} />
          <StyledPlayPauseIcon
            icon={isPlaying ? faPause : faPlay}
            onClick={togglePlay}
          />
        </StyledActionContainer>
      </>
    );
  }

  return (
    <StyledRandomQuotes data-testid={RANDOM_QUOTES_IDS.rootContainer}>
      {renderContent()}
    </StyledRandomQuotes>
  );
};
