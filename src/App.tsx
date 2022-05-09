import React, { useCallback, useState } from 'react';
import './App.css';
import { RandomQuotes } from './views/RandomQuotes/RandomQoutes';
import { PopularQuotes } from './views/PopularQuotes/PopularQuotes';
import {
  StyledContainer,
  StyledIconContainer,
  StyledRandomIcon,
  StyledIconText,
  StyledPopularIcon,
  StyledHeader,
  StyledHeaderSides,
  StyledBackIcon,
  StyledHeaderTitle,
  StyledContent,
  StyledFooter,
  StyledFooterText,
} from './app.styles';
import { APP_TEST_IDS } from './views/app.const';

function App() {
  // Todo: refactor to use a routing lib.
  const [route, setRoute] = useState<'start' | 'random' | 'popular'>('start');

  const handleBack = useCallback(() => {
    setRoute('start');
  }, []);

  const handleRandomPressed = useCallback(() => {
    setRoute('random');
  }, []);

  const handlePopularPressed = useCallback(() => {
    setRoute('popular');
  }, []);

  const renderConent = useCallback(() => {
    if (route === 'start') {
      return (
        <StyledContainer data-testid={APP_TEST_IDS.initialScreen}>
          <StyledIconContainer
            data-testid={APP_TEST_IDS.randomButton}
            onClick={handleRandomPressed}
          >
            <StyledRandomIcon />
            <StyledIconText>Random</StyledIconText>
          </StyledIconContainer>
          <StyledIconContainer>
            <StyledPopularIcon
              data-testid={APP_TEST_IDS.popularButton}
              onClick={handlePopularPressed}
            />
            <StyledIconText>Popular</StyledIconText>
          </StyledIconContainer>
        </StyledContainer>
      );
    }

    if (route === 'random') {
      return <RandomQuotes />;
    }

    return <PopularQuotes />;
  }, [route]);

  return (
    <div className='app'>
      <StyledHeader>
        <StyledHeaderSides>
          {route !== 'start' && (
            <StyledBackIcon
              data-testid={APP_TEST_IDS.headerBackButton}
              onClick={handleBack}
            />
          )}
        </StyledHeaderSides>
        <StyledHeaderTitle data-testid={APP_TEST_IDS.headerTitle}>
          {route}
        </StyledHeaderTitle>
        <StyledHeaderSides />
      </StyledHeader>
      <StyledContent>{renderConent()}</StyledContent>
      <StyledFooter data-testid={APP_TEST_IDS.footer}>
        <StyledFooterText>- Kabisa coding assignment -</StyledFooterText>
      </StyledFooter>
    </div>
  );
}

export default App;
