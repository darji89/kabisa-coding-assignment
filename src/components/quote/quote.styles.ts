import styled from 'styled-components';
import QuoteIcon from '../../assets/quote.svg';

export const StyledContainer = styled.div<{ isActive: boolean }>`
  border-radius: 12px;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  &:not(:nth-child(0)) {
    margin-bottom: 50px;
  }
`;

const StyledQuoteIcon = styled.img.attrs({
  src: QuoteIcon,
})`
  position: absolute;
  height: 45px;
  opacity: 0.2;
  width: 45px;
`;

export const StyledStartQuoteIcon = styled(StyledQuoteIcon)`
  position: absolute;
  height: 45px;
  left: 12px;
  opacity: 0.2;
  top: 12px;
  width: 45px;
`;

export const StyledEndQuoteIcon = styled(StyledQuoteIcon)`
  height: 45px;
  bottom: 12px;
  opacity: 0.2;
  position: absolute;
  right: 12px;
  transform: rotate(180deg);
  width: 45px;
`;

export const StyledTextContainer = styled.div`
  padding: 45px;
`;

export const StyledQuoteText = styled.h4`
  color: #4d4d4d;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const StyledAuthor = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;
