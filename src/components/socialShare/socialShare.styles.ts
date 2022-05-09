import styled from 'styled-components';

export const StyledSocialShare = styled.div<{ show: boolean }>`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.25s ease-out;

  > button:first-child {
    margin-right: 12px;
  }
`;
