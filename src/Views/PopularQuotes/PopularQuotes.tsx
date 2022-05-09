import React, { FC } from 'react';
import { useFetchPopularQuotes } from './useFetchPopularQuotes';
import { Quote } from '../../components/quote/Quote';
import { POPULAR_QUOTES_IDS } from './popularQuotes.const';
import { StatusIcon } from '../../components/statusIcon/StatusIcon';
import {
  faExclamationTriangle,
  faHeartCrack,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { StyledPopularRoutes } from './popularQuotes.styles';

export const PopularQuotes: FC = () => {
  const { isLoading, error, data } = useFetchPopularQuotes();

  function renderContent() {
    if (isLoading) {
      return (
        <StatusIcon
          testId={POPULAR_QUOTES_IDS.loadingStatus}
          pulse
          icon={faSpinner}
          text='Loading...'
        />
      );
    }

    if (error) {
      return (
        <StatusIcon
          testId={POPULAR_QUOTES_IDS.errorStatus}
          icon={faExclamationTriangle}
          text='Error...'
        />
      );
    }

    if (!data) {
      return (
        <StatusIcon
          testId={POPULAR_QUOTES_IDS.noDataStatus}
          icon={faHeartCrack}
          text='Where did all the quotes go?'
        />
      );
    }

    return (
      <div data-testid={POPULAR_QUOTES_IDS.quotesContainer}>
        {data.map(({ author, id, permalink, quote }) => (
          <Quote author={author} key={id} link={permalink} text={quote} />
        ))}
      </div>
    );
  }

  return (
    <StyledPopularRoutes data-testid={POPULAR_QUOTES_IDS.rootContainer}>
      {renderContent()}
    </StyledPopularRoutes>
  );
};
