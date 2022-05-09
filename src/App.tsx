import React, { useCallback, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faShuffle,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { RandomQuotes } from './views/RandomQuotes/RandomQoutes';
import { PopularQuotes } from './views/PopularQuotes/PopularQuotes';
import { StyledIcon } from './components/common/StyledComponent';

const queryClient = new QueryClient();

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 45px;
  width: 100%;
`;

const StyledBackIcon = styled(StyledIcon).attrs({
  icon: faAngleLeft,
})``;

const StyledHeaderTitle = styled.h2`
  color: #4d4d4d;
  flex: 1;
  font-size: 22px;
  letter-spacing: 4px;
  font-weight: 800;
  text-align: center;
  text-transform: capitalize;
`;

const StyledHeaderSides = styled.div`
  display: flex;
  flex: 0.5;
  height: 100%;
  align-items: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
`;

const StyledIconContainer = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    margin-right: 100px;
  }
`;

const StyledRandomIcon = styled(StyledIcon).attrs({
  icon: faShuffle,
})`
  height: 45px;
  widht: 45px;
`;

const StyledPopularIcon = styled(StyledIcon).attrs({
  icon: faFire,
})`
  height: 45px;
  widht: 45px;
`;

const StyledIconText = styled.p`
  color: #4d4d4d;
  flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

const StyledContent = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 45px;
`;

const StyledFooterText = styled.p`
  font-size: 10px;
`;

function App() {
  // Todo: refactor to use a routing lib.
  const [route, setRoute] = useState<'start' | 'random' | 'popular'>('random');

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
        <StyledContainer>
          <StyledIconContainer onClick={handleRandomPressed}>
            <StyledRandomIcon />
            <StyledIconText>Random</StyledIconText>
          </StyledIconContainer>
          <StyledIconContainer>
            <StyledPopularIcon onClick={handlePopularPressed} />
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
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <StyledHeader>
          <StyledHeaderSides>
            {route !== 'start' && <StyledBackIcon onClick={handleBack} />}
          </StyledHeaderSides>
          <StyledHeaderTitle>{route}</StyledHeaderTitle>
          <StyledHeaderSides />
        </StyledHeader>
        <StyledContent>{renderConent()}</StyledContent>
        <StyledFooter>
          <StyledFooterText>- Kabisa coding assignment -</StyledFooterText>
        </StyledFooter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
