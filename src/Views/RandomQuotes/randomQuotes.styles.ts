import styled from 'styled-components';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from '../../components/common/StyledComponent';

export const StyledRandomQuotes = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 960px;
`;

export const StyledActionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
`;

export const StyledRefetchIcon = styled(StyledIcon).attrs({
  icon: faRotate,
})``;

export const StyledPlayPauseIcon = styled(StyledIcon)``;
