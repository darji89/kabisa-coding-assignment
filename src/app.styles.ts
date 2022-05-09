import styled from 'styled-components';
import {
  faAngleLeft,
  faShuffle,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from './components/common/StyledComponent';

export const StyledApp = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: rgb(32, 32, 32);
  max-width: 960px;
  width: 100vw;
`;

export const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 45px;
  width: 100%;
`;

export const StyledBackIcon = styled(StyledIcon).attrs({
  icon: faAngleLeft,
})``;

export const StyledHeaderTitle = styled.h2`
  color: #4d4d4d;
  flex: 1;
  font-size: 22px;
  letter-spacing: 4px;
  font-weight: 800;
  text-align: center;
  text-transform: capitalize;
`;

export const StyledHeaderSides = styled.div`
  display: flex;
  flex: 0.5;
  height: 100%;
  align-items: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
`;

export const StyledIconContainer = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    margin-right: 100px;
  }
`;

export const StyledRandomIcon = styled(StyledIcon).attrs({
  icon: faShuffle,
})`
  height: 45px;
  widht: 45px;
`;

export const StyledPopularIcon = styled(StyledIcon).attrs({
  icon: faFire,
})`
  height: 45px;
  widht: 45px;
`;

export const StyledIconText = styled.p`
  color: #4d4d4d;
  flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const StyledContent = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

export const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 45px;
`;

export const StyledFooterText = styled.p`
  font-size: 10px;
`;
