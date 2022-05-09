import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledIcon = styled(FontAwesomeIcon).attrs({
  color: '#4d4d4d',
})`
  cursor: pointer;
  margin: 0 12px;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
`;
