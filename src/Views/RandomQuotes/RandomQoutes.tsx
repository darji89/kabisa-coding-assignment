import React, { FC, useCallback, useState } from 'react';
import { useFetchRadomQuote } from './useFetchRadomQuote';
import { Quote } from '../../components/quote/Quote';
import {
  faPlay,
  faPause,
  faSpinner,
  faExclamationTriangle,
  faHeartCrack,
} from '@fortawesome/free-solid-svg-icons';
import { useInterval } from '../../utils/helpers';
import { StatusIcon } from '../../components/statusIcon/StatusIcon';
import { RANDOM_QUOTES_IDS } from './randomQuotes.const';
import {
  StyledActionContainer,
  StyledRefetchIcon,
  StyledRandomQuotes,
  StyledPlayPauseIcon,
} from './randomQuotes.styles';

export const TIMER_DELAY = 7500;

export const RandomQuotes: FC = () => {
  const [isPlaying, setIsplaying] = useState(false);
  const { isLoading, error, data, refetch } = useFetchRadomQuote();
  useInterval(refetch, isPlaying ? TIMER_DELAY : undefined);

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
        <StatusIcon
          testId={RANDOM_QUOTES_IDS.loadingStatus}
          pulse
          icon={faSpinner}
          text='Loading...'
        />
      );
    }

    if (error) {
      return (
        <StatusIcon
          testId={RANDOM_QUOTES_IDS.errorStatus}
          icon={faExclamationTriangle}
          text='Error...'
        />
      );
    }

    if (!data) {
      return (
        <StatusIcon
          testId={RANDOM_QUOTES_IDS.noDataStatus}
          icon={faHeartCrack}
          text="Guess there's really nothing to say..."
        />
      );
    }

    return (
      <>
        <Quote author={data.author} link={data.permalink} text={data.quote} />
        <StyledActionContainer>
          <StyledRefetchIcon
            data-testid={RANDOM_QUOTES_IDS.refetchButton}
            onClick={handleRefetch}
          />
          <StyledPlayPauseIcon
            data-testid={RANDOM_QUOTES_IDS.playPauseButton}
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
